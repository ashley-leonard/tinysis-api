class EnrollmentSerializer < ApplicationSerializer
  set_type :enrollment

  attributes :participant_id, :finalized_on

  belongs_to :contract

  has_many :credit_assignments

  attribute :enrollment_status do |object|
    Enrollment::STATUS_NAMES[object.enrollment_status]
  end

  attribute :completion_status do |object|
    Enrollment::COMPLETION_NAMES[object.completion_status]
  end
end
