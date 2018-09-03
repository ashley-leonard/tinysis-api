class StudentSerializer < UserSerializer
  set_type :student

  attributes :district_id, :district_grade

  belongs_to :coordinator, record_type: :staff

  # has_many :statuses, record_type: :status

end
