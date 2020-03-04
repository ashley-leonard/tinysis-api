# lib/auth0_management.rb

# frozen_string_literal: true

require 'net/http'
require 'uri'

class AuthManagementError < StandardError
  attr_reader :code
  attr_reader :body

  def initialize(msg, response = nil)
    super(msg)

    return unless response

    @code = response.code
    @body = response.body
  end
end

class AuthManagement
  def initialize(config)
    @config = config

    %i[domain client_secret client_id audience].each do |setting|
      unless @config[setting]
        raise AuthManagementError, "Expected #{setting} to be passed in config"
      end
    end

    @base_url = "https://#{@config[:domain]}"
  end

  def get_access_token
    url = URI("#{@base_url}/oauth/token")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    request['content-type'] = 'application/x-www-form-urlencoded'
    request.body = "grant_type=client_credentials&client_id=#{@config[:client_id]}&client_secret=#{@config[:client_secret]}&audience=#{@config[:audience]}"

    response = http.request(request)

    @auth = JSON.parse(response.read_body)

    @auth
  end

  def get_user(user_id)
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json'
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      get_user_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}")

      response = http.get(get_user_url, headers)

      if response.code != '200'
        raise AuthManagementError.new('User fetch failed', response)
      end

      user = JSON.parse(response.body)

      get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

      response = http.get(get_roles_url, headers)

      if response.code != '200'
        raise AuthManagementError.new('User roles fetch failed', response)
      end

      roles = JSON.parse(response.body)

      user['roles'] = roles

      get_permissions_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/permissions")

      response = http.get(get_permissions_url, headers)

      if response.code != '200'
        raise AuthManagementError.new('User permissions fetch failed', response)
      end

      permissions = JSON.parse(response.body)

      user['permissions'] = permissions

      return user
    end
  end

  def find_user(email_address)
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json'
      }

      get_user_url = URI("#{@base_url}/api/v2/users?q=email:#{URI.encode_www_form_component(email_address)}")

      response = http.get(get_user_url, headers)

      if response.code != '200'
        raise AuthManagementError.new('User fetch failed', response)
      end

      user = JSON.parse(response.body).first

      return nil unless user

      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

      response = http.get(get_roles_url, headers)

      if response.code != '200'
        raise AuthManagementError.new('User roles fetch failed', response)
      end

      roles = JSON.parse(response.body)

      user['roles'] = roles

      return user
    end
  end

  def activate_user(attributes)
    url = URI(@base_url)
    user = nil

    Net::HTTP.start(url.host, url.port, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json'
      }

      email = attributes[:email]
      get_user_url = URI("#{@base_url}/api/v2/users?q=email:#{URI.encode_www_form_component(email)}")

      response = http.get(get_user_url, headers)

      unless %w[200 404].include? response.code
        raise AuthManagementError.new('User fetch failed', response)
      end
      unless response.body == '[]'
        raise AuthManagementError, 'Auth0 user already created'
      end

      request_body = {
        given_name: attributes[:first_name],
        family_name: attributes[:last_name],
        password: AuthManagement.random_password(20),
        email: attributes[:email],
        connection: 'Username-Password-Authentication',

        # Auth0 does not allow you to use an attribute name of user_id
        app_metadata: {
          databaseId: attributes[:id]
        }
      }

      request_body[:name] = "#{attributes[:first_name]} #{attributes[:last_name]}"

      response = http.post("#{@base_url}/api/v2/users", request_body.to_json, headers)

      if response.code.to_i >= 400
        raise AuthManagementError.new('User creation failed', response)
      end

      user = JSON.parse(response.body)

      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      new_role = getAuth0RoleFromTinySisRole attributes[:role]
      request_body = { roles: [new_role[:id]] }

      roles_url = "#{@base_url}/api/v2/users/#{encoded_user_id}/roles"

      response = http.post(roles_url, request_body.to_json, headers)

      if response.code.to_i >= 400
        raise AuthManagementError.new('User role update failed', response)
      end
    end

    user
  end

  def delete_user(user_id)
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json'
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      response = http.delete("#{@base_url}/api/v2/users/#{encoded_user_id}", headers)

      if response.code != '204'
        raise AuthManagementError.new('User deletion failed', response)
      end

      return nil
    end
  end

  def update_user(user_id, attributes)
    Rails.logger.info 'update_user'
    Rails.logger.info attributes

    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE) do |http|
      headers = {
        'Authorization': "Bearer #{@auth['access_token']}",
        'content-type': 'application/json'
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      bodies = []

      if attributes[:last_name] && attributes[:first_name]
        name = "#{attributes[:first_name]} #{attributes[:last_name]}"
      end
      bodies.push(
        given_name: attributes[:first_name],
        family_name: attributes[:last_name],
        nickname: attributes[:nickname],
        name: name
      )
      bodies.push(
        email: attributes[:email]
      )

      Rails.logger.info 'updating'
      Rails.logger.info bodies

      # reject any bodies that are not populated
      bodies = bodies
               .map { |body| body.compact }
               .map { |body| body.transform_values { |value| value == '' ? nil : value } }
               .reject(&:empty?)

      Rails.logger.info 'remaining'
      Rails.logger.info bodies

      # update the bodies with changed values
      bodies.each do |body|
        response = http.patch("#{@base_url}/api/v2/users/#{encoded_user_id}", body.to_json, headers)
        if response.code != '200'
          raise AuthManagementError.new("Difficulty updating #{body.keys.join}", response)
        end
      end

      # handle role updates separately
      if attributes[:role]
        Rails.logger.info 'handling role'
        get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

        response = http.get(get_roles_url, headers)

        if response.code != '200'
          raise AuthManagementError.new('User roles fetch failed', response)
        end

        Rails.logger.info 'got roles'
        Rails.logger.info response.body
        roles = JSON.parse(response.body)

        unless roles.empty?
          request_body = {
            "roles": roles.map { |role| role['id'] }
          }

          req = Net::HTTP::Delete.new("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", headers)

          response = http.request(req, request_body.to_json)

          Rails.logger.info response

          if response.code != '204'
            raise AuthManagementError.new('User role flush failed', response)
          end
        end

        new_role = getAuth0RoleFromTinySisRole attributes['role']
        request_body = { roles: [new_role[:id]] }

        add_roles_url = "#{@base_url}/api/v2/users/#{encoded_user_id}/roles"

        response = http.post(add_roles_url, request_body.to_json, headers)

        if response.code.to_i >= 400
          raise AuthManagementError.new('User role update failed', response)
        end
      end

      return true
    end
  end

  # generates a semi human readable random password
  DEFAULT_PASSWORD_LENGTH = 20
  def self.random_password(size = DEFAULT_PASSWORD_LENGTH)
    c = %w[b c d f g h j k l m n p qu r s t v w x z ch cr fr nd ng nk nt ph pr rd sh sl sp st th tr]
    v = %w[a e i o u y]
    r = ''
    f = true
    size.times do
      r += (f ? c[rand * c.size] : v[rand * v.size])
      f = !f
    end

    r
      .capitalize
      .slice(0, size - 1)
      .concat((rand * 10).round.to_s)
  end

  private

  def getAuth0RoleFromTinySisRole(roleName)
    roleData = Rails.application.secrets
                    .auth0_management[:roles]
                    .find { |role| role[:name] == roleName }

    unless roleData
      raise AuthManagementError, 'Role designation missing in config'
    end

    roleData
  end
end
