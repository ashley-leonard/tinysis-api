class UserSerializer < ApplicationSerializer
  attributes :first_name, :last_name, :nickname, :date_active, :date_inactive
end
