class AdminUsersController < AdminController
  include UserControllerMethods

protected
  def allowed_fields
    [
      :firstName,
      :lastName,
      :nickname,
      :canLogin,
      :dateActive,
      :dateInactive,
      :districtId,
      :districtGrade,
      :isActive,
      :role,
      :coordinator,
      :login,
      :email,
    ]
  end

  def get_role_conditions
    case params[:role]
    when 'student'
      ['privilege = ?', User::PRIVILEGE_STUDENT]
    when 'staff'
      ['privilege IN (?)', [User::PRIVILEGE_ADMIN, User::PRIVILEGE_STAFF]]
    when 'admin'
      ['privilege = ?', User::PRIVILEGE_ADMIN]
    else
      nil
    end
  end
end
