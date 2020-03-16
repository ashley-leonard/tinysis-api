# frozen_string_literal: true

class CreditAssignment < ApplicationRecord
  belongs_to :credit
  belongs_to :legacy_creditable, polymorphic: true, optional: true

  belongs_to :enrollment, optional: true
  belongs_to :user, optional: true
  belongs_to :contract, optional: true

  belongs_to :credit_transmittal_batch, optional: true
  belongs_to :contract_term, class_name: 'Term', foreign_key: :contract_term_id, optional: true
  belongs_to :contract_facilitator, class_name: 'User', foreign_key: :contract_facilitator_id, optional: true

  has_many :notes, as: :notable, dependent: :destroy

  validates_presence_of :credit_id
  validates_presence_of :contract_term, if: -> { user? }
  validates_presence_of :credit_hours

  belongs_to :parent_credit_assignment, class_name: 'CreditAssignment', foreign_key: :parent_credit_assignment_id, optional: true
  has_many :child_credit_assignments, class_name: 'CreditAssignment', foreign_key: :parent_credit_assignment_id

  has_one :graduation_plan_mapping, dependent: :destroy

  scope :user, -> { where('user_id IS NOT NULL') }
  scope :nonzero, -> { where('credit_hours > 0') }
  scope :uncombined, -> { where('parent_credit_assignment_id IS NULL') }
  scope :district_finalize_approved, -> { where('district_finalize_approved_on IS NOT NULL') }

  def privileges(user)
    primary_parent.privileges(user)
  end

  def assign_credit(user, new_credit)
    unless privileges(user)[:edit]
      raise 'User does not have privileges to assign credit'
    end
    raise 'Credit is off limits' if batched_for_transmit?

    self.credit = new_credit
    save

    district_unapprove if coordinator_approved?
  end

  def enrollment_finalize(completion_status, participant, contract, date)
    # set finalized_on date
    self.enrollment_finalized_on = date

    # map attributes onto credit for easier access by the client
    self.contract = contract
    self.contract_facilitator = contract.facilitator
    self.contract_term = contract.term
    self.contract_name = contract.name
    self.contract_facilitator_name = contract.facilitator.full_name

    # assign to student if fulfilled
    case completion_status
    when Enrollment::COMPLETION_FULFILLED
      self.user = participant

    # cache the credit in case this is a left-behind
    when Enrollment::COMPLETION_CANCELED
      denormalize_credit
    end
    save!
  end

  def enrollment_unfinalize
    if user_id?
      raise 'Trying to unfinalize a credit that has already passed to the user'
    end

    normalize_credit
    self.enrollment_finalized_on = nil
    save!
  end

  def normalize_credit
    return false unless credit_id

    self.credit_course_name = nil
    self.credit_course_id = nil

    true
  end

  def denormalize_credit
    return false unless credit_id

    self.credit_course_name = credit.course_name
    self.credit_course_id = credit.course_id

    true
  end

  # facilitator has approved the credit for transmittal to the district.
  # move the credit course names over and record who approved the credit for transmittal to district
  def district_approve(user, date)
    if credit_transmittal_batch_id
      raise "Can't approve this, as it has already been approved for recording at the district"
    end

    self.district_finalize_approved = true
    self.district_finalize_approved_by = user.last_name_first
    self.district_finalize_approved_on = date

    # set denormalized credits info
    denormalize_credit

    save!

    child_credit_assignments.each do |ca|
      ca.save if ca.denormalize_credit
    end
  end

  # safe retrieval of contract term name
  def contract_term_name
    return 'Unknown term' unless contract_term

    contract_term.name
  end

  def district_unapprove
    if credit_transmittal_batch_id
      raise "Can't unapprove this, as it has already been approved for recording at the district"
    end

    self.district_finalize_approved = false
    self.district_finalize_approved_by = nil
    self.district_finalize_approved_on = nil

    # ensure a credit
    self.credit = Credit.find(:first) unless credit

    normalize_credit

    save!

    child_credit_assignments.each do |ca|
      ca.save if ca.normalize_credit
    end
  end

  def facilitator_approved?
    enrollment_finalized_on.nil? == false
  end

  def coordinator_approved?
    district_finalize_approved_on.nil? == false
  end

  def batched_for_transmit?
    credit_transmittal_batch_id.nil? == false
  end

  def transmitted?
    district_transmitted_on?
  end

  # safely retrieve the course ID
  def credit_course_id
    if attributes['credit_course_id'].present?
      attributes['credit_course_id']
    elsif credit_id?
      credit.course_id
    else
      raise 'No course ID available'
    end
  end

  # safely retrieve the course name
  def credit_course_name
    if attributes['credit_course_name'].present?
      attributes['credit_course_name']
    elsif credit_id?
      credit.course_name
    else
      raise 'No course name available'
    end
  end

  # credit_course_name
  # credit_course_id
  #
  def credit_string
    "#{credit_course_name} (#{credit_course_id}) / #{credit_hours_string}"
  end

  def credit_hours_string
    if override_hours
      "#{override_hours} (O:#{override_by})"
    else
      credit_hours.to_s
    end
  end

  def credits
    override_hours || credit_hours
  end

  def override(override, user)
    if override.blank?
      self.override_hours = nil
      self.override_by = nil
    else
      self.override_hours = override
      self.override_by = user.last_name_f
    end
  end

  def self.combine(student, credit_id, term_id, override, credit_assignments, user)
    # scan and get the most recent term and the cumulative hours
    hours = credit_assignments.sum(&:credit_hours)

    parent = CreditAssignment.new(
      credit_id: credit_id,
      credit_hours: hours,
      contract_name: 'Combined',
      contract_facilitator_id: user.id,
      contract_facilitator_name: user.last_name_first,
      enrollment_finalized_on: Time.now.gmtime,
      contract_term: Term.find_by_id(term_id),
      user: student
    )
    parent.override(override, user)

    credit_assignments.each do |ca|
      # TODO: protect against unaffiliated credit assignments being added
      ca.graduation_plan_mapping&.destroy
      ca.parent_credit_assignment = parent
      ca.denormalize_credit
      ca.save
    end
    student.credit_assignments << parent

    parent
  end

  def uncombine
    child_credit_assignments.each do |ca|
      ca.parent_credit_assignment = nil
      ca.normalize_credit
      ca.save
    end
    destroy
  end

  def user?
    user.present?
  end

  def primary_parent
    if user?
      user
    elsif contract_id?
      contract
    elsif enrollment_id?
      enrollment
    else
      raise 'Unknown primary parent'
    end
  end
end
