class CoordinatorSerializer
  include FastJsonapi::ObjectSerializer
  set_type :staff
  set_key_transform :camel_lower
  attributes :first_name, :last_name, :email, :login

  has_many :coordinatees, record_type: :student
end
