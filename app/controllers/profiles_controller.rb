# frozen_string_literal: true

class ProfilesController < ApiBaseController
  def index
    options = {
      meta: {
        permissions: get_permissions
      }
    }

    render json: UserSerializer.new(@user, options), status: 200
  end
end
