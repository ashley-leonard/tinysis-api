# frozen_string_literal: true

class StudentsController < ApiBaseController
  include UserControllerMethods

  protected

  def allowed_fields
    %i[
      firstName
      lastName
      nickname
      name
      dateActive
      dateInactive
      districtId
      districtGrade
      isActive
      status
      coordinator
      role
    ]
  end

  def get_role_conditions
    { privilege: User::PRIVILEGE_STUDENT }
  end

  def get_scope_conditions
    scope = params.permit(:scope)

    scope_params = /contract:(\d+)/.match(scope.to_s)

    return {} unless scope_params

    return ["id NOT in (?)", Enrollment.where(contract_id: scope_params[1]).map(&:participant_id)]
  end
end
