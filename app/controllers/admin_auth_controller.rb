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

    render(json: { error: 'User not found with provided email' }, status: 404) and return unless user

    render json: { data: user }

  rescue => error
    puts 'error is'
    puts error
    render plain: error, status: 500
  end
end
