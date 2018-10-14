class StatusSerializer < ApplicationSerializer
  set_type :status

  attributes :month, :academic_status, :attendance_status, :created_at, :updated_at, :fte_hours, :met_fte_requirements, :held_periodic_checkins

  attribute :student_id do |object|
    object.statusable_id.to_s if object.statusable_type == 'User'
  end

  attribute :enrollment_id do |object|
    object.statusable_id.to_s if object.statusable_type == 'Enrollment'
  end

  attribute :coordinator_id do |object|
    object.coordinator_id.to_s if object.statusable_type == 'User'
  end
end
