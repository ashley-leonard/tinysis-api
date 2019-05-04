class ProfilesController < ApplicationController
  def index
    conditions = {
      privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN],
      id: 2
    }

    result = User
      .where(conditions)
      .limit(1)

    return render json: { message: 'Not found' }, status: 404 if result.length == 0 

    render json: StaffSerializer.new(result[0]), status: 200
  end
end
