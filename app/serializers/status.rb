class StatusSerializer < ApplicationSerializer
  set_type :status

  attributes :academic_status, :attendance_status, :created_at, :updated_at, :fte_hours, :met_fte_requirements, :held_periodic_checkins

  belongs_to :creator, record_type: :staff
end
