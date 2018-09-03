class StaffSerializer < UserSerializer
  set_type :staff
  attributes :email

  has_many :coordinatees, record_type: :student
end
