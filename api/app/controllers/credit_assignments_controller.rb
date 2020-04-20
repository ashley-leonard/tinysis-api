# frozen_string_literal: true

class CreditAssignmentsController < ApiBaseController
  before_action :get_student, only: %i[approve unapprove create_for_student]
  before_action :entitle_student, only: %i[destroy create_for_student]

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == '-1'

    conditions = {}

    if params[:enrollmentIds]
      conditions[:enrollment_id] = params[:enrollmentIds].split(',')
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    conditions[:user_id] = params[:studentIds].split(',') if params[:studentIds]

    result = CreditAssignment
             .where(conditions)
             .includes(:credit)
             .limit(limit)
    count = CreditAssignment
            .where(conditions)
            .count

    options = {
      meta: {
        count: count
      },
      params: {
        forFulfilled: params[:includeFulfilledAttributes] == 'true'
      }
    }

    if params[:include]
      options[:include] = params[:include].split(',').map(&:underscore)
    end

    render json: CreditAssignmentSerializer.new(result, options)
  end

  def show
    credit_assignment = CreditAssignment.find params[:id]

    render json: CreditAssignmentSerializer.new(credit_assignment, include: [:notes])
  end

  def create_for_enrollment
    credit_relation = get_relation(:credit)

    credit = Credit.find credit_relation['id']
    enrollment = Enrollment.find params[:enrollment_id]

    attributes = get_attributes

    new_credit_assignment = CreditAssignment.new attributes
    new_credit_assignment.enrollment = enrollment
    new_credit_assignment.credit = credit
    new_credit_assignment.save!

    render json: CreditAssignmentSerializer.new(new_credit_assignment)
  end

  def create_for_student
    term_relation = get_relation(:contract_term)
    credit_relation = get_relation(:credit)
    child_credit_assignment_ids = get_relation(:child_credit_assignments).map { |ca| ca['id'] }

    attributes = get_attributes

    term = Term.find term_relation['id']
    credit = Credit.find credit_relation['id']
    child_credit_assignments = CreditAssignment
                               .where(id: child_credit_assignment_ids, user_id: @student.id)

    if child_credit_assignments.empty?
      raise ActionController::ParameterMissing, 'childCreditAssignments'
    end

    new_credit_assignment = CreditAssignment.combine(@student, credit[:id], term[:id], attributes[:override_hours], child_credit_assignments, @user)

    update_note new_credit_assignment

    render json: CreditAssignmentSerializer.new(new_credit_assignment, params: { forFulfilled: true })
  end

  def create_for_contract
    credit_relation = get_relation(:credit)
    contract_relation = get_relation(:contract)

    attributes = get_attributes

    credit = Credit.find credit_relation['id']
    contract = Contract.find contract_relation['id']

    new_credit_assignment = CreditAssignment.new attributes
    new_credit_assignment.contract = contract
    new_credit_assignment.credit = credit
    new_credit_assignment.save!

    update_note new_credit_assignment

    render json: CreditAssignmentSerializer.new(new_credit_assignment)
  end

  def approve
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_approve @user, approval_attributes[:district_finalize_approved_on]

    render json: CreditAssignmentSerializer.new(credit_assignment, params: { forFulfilled: true })
  end

  def unapprove
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_unapprove

    render json: CreditAssignmentSerializer.new(credit_assignment, params: { forFulfilled: true })
  end

  def update
    credit_assignment = CreditAssignment.find params[:id]
    credit_relation = get_relation(:credit)
    attributes = get_attributes

    credit_assignment.credit = Credit.find credit_relation[:id]
    credit_assignment.update_attributes attributes
    credit_assignment.save!

    update_note credit_assignment

    render json: CreditAssignmentSerializer.new(credit_assignment, params: { forFulfilled: true })
  end

  def destroy
    credit_assignment = CreditAssignment.find params[:id]

    children = credit_assignment.child_credit_assignments

    unless !children.empty? && !credit_assignment.transmitted?
      raise TinyException, 'Not permitted to delete this credit assignment'
    end

    credit_assignment.uncombine

    render nothing: true, status: 204
  end

  protected

  def update_note(credit_assignment)
    note_text = get_note
    return if note_text.blank?

    note = credit_assignment.notes.create! note: note_text, creator: @user
  end

  def entitle_student
    # TBI
    true
  end

  def get_student
    @student = User.find_by_id_and_privilege params[:student_id], User::PRIVILEGE_STUDENT
    raise ActiveRecord::RecordNotFound unless @student
  end

  def get_approval_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:district_finalize_approved_on)
  end

  def get_attributes
    params.require(:data)
          .require(:attributes)
          .permit(:credit_hours, :override_hours)
  end

  def get_note
    params.require(:data)
          .require(:attributes)
          .dig(:note)
  end

  def get_relation(relation)
    params
      .require(:data)
      .require(:relationships)
      .require(relation)
      .require(:data)
  end
end
