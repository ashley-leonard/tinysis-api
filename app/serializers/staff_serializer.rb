class StaffSerializer < UserSerializer
  set_type :staff
  attributes :email, :login

  has_many :coordinatees, record_type: :student
end
