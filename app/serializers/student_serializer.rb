class StudentSerializer < ApplicationSerializer
  set_type :student

  attributes :first_name, :last_name, :nickname, :district_id, :district_grade, :date_active, :date_inactive

  belongs_to :coordinator, record_type: :staff

  # has_many :statuses, record_type: :status
end
