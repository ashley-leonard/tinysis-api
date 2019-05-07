class ProfilesController < ApplicationController
  def index
    admin = User.find_by_privilege User::PRIVILEGE_ADMIN
    conditions = {
      privilege: [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN],
      id: admin.id,
    }

    result = User
      .where(conditions)
      .limit(1)

    return render json: { message: 'Not found' }, status: 404 if result.length == 0 

    render json: UserSerializer.new(result[0]), status: 200
  end
end
