class StudentSerializer
  include FastJsonapi::ObjectSerializer
  set_type :student
  set_key_transform :camel
  attributes :first_name, :last_name, :nickname, :district_id, :district_grade

  belongs_to :coordinator, record_type: :staff
end
