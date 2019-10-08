class ProfilesController < ApplicationController
  def index
    user_id = get_user_id

    user = User.find user_id

    options = {
      meta: {
        permissions: get_permissions
      }
    }

    render json: UserSerializer.new(user, options), status: 200
  end
end
