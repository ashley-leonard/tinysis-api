require './lib/auth0_management'

class AdminAuthController < AdminController

  def create


  end

  def destroy


  end

  def show
    email = params[:email]

    client = AuthManagement.new Rails.application.secrets.auth0_management
    client.get_access_token

    user = client.get_user email
  end
end
