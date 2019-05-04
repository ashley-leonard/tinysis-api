class UserSerializer < ApplicationSerializer
  attributes :first_name
  attributes :last_name
  attributes :nickname
  attributes :date_active
  attributes :date_inactive
  attributes :district_id
  attributes :district_grade
  attributes :login
  attributes :email

  attribute :can_login do |object|
    object.login_status == User::LOGIN_ALLOWED
  end

  attribute :is_active do |object|
    object.status == User::STATUS_ACTIVE
  end

  attribute :role do |object|
    User::PRIVILEGE_NAMES[object.privilege].downcase
  end

  attribute :is_admin do |object|
    object.admin?
  end

  has_many :coordinatees, record_type: :student, if: Proc.new { |record| record.staff? }
  belongs_to :coordinator, record_type: :staff, if: Proc.new{ |record| record.student? }
end
