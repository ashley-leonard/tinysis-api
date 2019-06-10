require './lib/auth0_management'

class AdminAuthController < AdminController

  def create
    user = @client.activate_user user_attributes

    render(json: { error: 'User not found with provided email' }, status: 404) and return unless user

    render json: { data: user }

  rescue => error
    render_error error
  end

  def destroy
    @client.destroy_user params[:id]

    render nothing: true, status: 204

  rescue => error
    render_error error
  end

  def show
    email = params[:email]

    user = @client.get_user email

    render(json: { error: 'User not found with provided email' }, status: 404) and return unless user

    render json: { data: user }

  rescue => error
    render_error error
  end

  def update
    user_id = params[:id]

    user = @client.update_user user_id, user_attributes

    render json: { data: user }

  rescue => error
    render_error error
  end

private
  before_action do
    @client = AuthManagement.new Rails.application.secrets.auth0_management
    @client.get_access_token
  end

  def user_attributes
    params
      .require(:admin_auth)
      .permit(:first_name, :last_name, :nickname, :email, :password, :role)
  end


  def render_error error
    Rails.logger.error error.exception || error
    
    render json: error.body || {}, status: error.code || 500
  end

end
