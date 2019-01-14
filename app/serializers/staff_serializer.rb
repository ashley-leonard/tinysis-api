class StaffSerializer < UserSerializer
  set_type :user
  attributes :email

  has_many :coordinatees, record_type: :student
end
