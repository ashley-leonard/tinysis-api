class UserSerializer < ApplicationSerializer
  attributes :first_name, :last_name, :nickname, :date_active, :date_inactive

  attribute :status do |object|
    User::STATUS_NAMES[object.status].downcase
  end
end
