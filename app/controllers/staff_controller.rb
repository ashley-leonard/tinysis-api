class StaffController < ApiBaseController
  include UserControllerMethods

protected
  def allowed_fields
    [
      :firstName,
      :lastName,
      :nickname,
      :coordinatees,
    ]
  end

  def get_role_conditions
    { privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN] }
  end
end
