# frozen_string_literal: true

class EnrollmentSerializer < ApplicationSerializer
  set_type :enrollment

  attributes :finalized_on

  belongs_to :contract
  belongs_to :participant

  has_many :credit_assignments
  has_many :turnins
  has_many :meeting_participants

  attribute :enrollment_status do |object|
    Enrollment::STATUS_NAMES[object.enrollment_status].downcase
  end

  attribute :completion_status do |object|
    Enrollment::COMPLETION_NAMES[object.completion_status].downcase
  end
end
