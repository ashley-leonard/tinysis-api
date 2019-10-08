# app/controllers/concerns/secured.rb

require './lib/json_web_token'

# frozen_string_literal: true
module Secured
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_request!
  end

  private

  def render_unauthorized message = 'Not authorized'
    render json: { errors: [message] }, status: :unauthorized
  end

  def authenticate_request!
    permissions = get_permissions

    render_unauthorized if permissions.empty?
  rescue JWT::VerificationError, JWT::DecodeError
    render_unauthorized
  end

  def http_token
    if request.headers['Authorization'].present?
      request.headers['Authorization'].split(' ').last
    end
  end

  def get_permissions
    JsonWebToken.extract_permissions(http_token)
  end

  def get_user_id
    JsonWebToken.extract_user_id(http_token)
  end
end