class StudentsController < ApplicationController
  include UserControllerMethods

protected
  def allowed_fields
    [
      :firstName,
      :lastName,
      :nickname,
      :dateActive,
      :dateInactive,
      :districtId,
      :districtGrade,
      :status,
      :coordinator,
    ]
  end

  def get_role_conditions
    { privilege: User::PRIVILEGE_STUDENT }
  end
end
