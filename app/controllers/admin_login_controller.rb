# frozen_string_literal: true

require './lib/auth0_management'

class AdminLoginController < AdminController
  def create
    user = @client.activate_user user_attributes

    user_with_roles = @client.get_user user['user_id']

    render json: { data: user_with_roles }
  rescue AuthManagementError => e
    render_error e
  rescue StandardError => e
    Rails.logger.error 'Error creating user'
    Rails.logger.error e
    render json: { message: e }, status: 500
  end

  def destroy
    @client.delete_user params[:id]

    render nothing: true, status: 204
  rescue AuthManagementError => e
    render_error e
  rescue StandardError => e
    render json: { message: e }, status: 500
  end

  def show
    email = params[:email]

    user = @client.find_user email

    unless user
      render(json: { error: 'User not found with provided email' }, status: 404) && return
    end

    render json: { data: user }
  rescue AuthManagementError => e
    render_error e
  rescue StandardError => e
    render json: { message: e }, status: 500
  end

  def update
    user_id = params[:id]

    @client.update_user user_id, user_attributes

    user = @client.get_user user_id

    render json: { data: user }
  rescue AuthManagementError => e
    render_error e
  rescue StandardError => e
    render json: { message: e }, status: 500
  end

  private

  before_action do
    @client = AuthManagement.new Rails.application.secrets.auth0_management
    @client.get_access_token
  end

  def user_attributes
    attrs = params
            .require(:data)
            .permit(:first_name, :last_name, :nickname, :email, :password, :id, :role)

    attrs
  end

  def render_error(error)
    Rails.logger.error error.exception || error

    render json: (error.body || {}), status: error.code || 500
  end
end
