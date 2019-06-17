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

  def initialize config
    @config = config

    [:domain, :client_secret, :client_id, :audience].each do |setting|
      raise AuthManagementError.new("Expected #{setting} to be passed in config") unless @config[setting]
    end

    @base_url = "https://#{@config[:domain]}"
  end

  def get_access_token
    url = URI("#{@base_url}/oauth/token")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/x-www-form-urlencoded'
    request.body = "grant_type=client_credentials&client_id=#{@config[:client_id]}&client_secret=#{@config[:client_secret]}&audience=#{@config[:audience]}"
    
    response = http.request(request)

    @auth = JSON.parse(response.read_body)

    return @auth
  end

  def get_user user_id
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      get_user_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}")

      response = http.get(get_user_url, headers)

      raise AuthManagementError.new('User fetch failed', response) if response.code != '200'

      user = JSON.parse(response.body)

      get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

      response = http.get(get_roles_url, headers)

      raise AuthManagementError.new('User roles fetch failed', response) if response.code != '200'

      roles = JSON.parse(response.body)

      user['roles'] = roles

      return user
    end
  end

  def find_user email_address
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      get_user_url = URI("#{@base_url}/api/v2/users?q=email:#{URI.encode_www_form_component(email_address)}")

      response = http.get(get_user_url, headers)

      raise AuthManagementError.new('User fetch failed', response) if response.code != '200'

      user = JSON.parse(response.body).first

      return nil unless user

      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

      response = http.get(get_roles_url, headers)

      raise AuthManagementError.new('User roles fetch failed', response) if response.code != '200'

      roles = JSON.parse(response.body)

      user['roles'] = roles

      return user
    end
  end

  def activate_user(attributes)
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      email = attributes[:email]
      get_user_url = URI("#{@base_url}/api/v2/users?q=email:#{URI.encode_www_form_component(email)}")

      response = http.get(get_user_url, headers)

      raise AuthManagementError.new('User fetch failed', response) unless ['200', '404'].include? response.code
      raise AuthManagementError.new('Auth0 user already created') unless response.body == '[]'

      request_body = {
        given_name: attributes[:first_name],
        family_name: attributes[:last_name],
        password: AuthManagement.random_password(20),
        email: attributes[:email]
      }
      request_body[:nickname] = attributes[:nickname] if attributes[:nickname].present?
      request_body[:name] = "#{attributes[:first_name]} #{attributes[:last_name]}"
      request_body[:connection] = "Username-Password-Authentication"

      response = http.post("#{@base_url}/api/v2/users", request_body.to_json, headers)

      raise AuthManagementError.new('User creation failed', response) if response.code != '200'

      user = response.body

      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      new_role = getRoleIdFromTinySisRole attributes[:role]
      request_body = { roles: [ new_role[:id] ] }

      response = http.patch("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", request_body.to_json, headers)

      raise AuthManagementError.new('User role update failed', response) if response.code != '200'

      roles = JSON.parse(response.read_body)

      user['roles'] = roles

      request_body = {
        result_url: "http://localhost:3001/welcome-staff",
        user_id: user['user_id'],
        ttl_sec: 0,
      }

      response = http.post("#{@base_url}/api/v2/tickets/email_verification", request_body.to_json, headers)

      raise AuthManagementError.new('Email verification failed', response) if response.code != '200'

      return user
    end
  end

  def delete_user user_id
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      response = http.delete("#{@base_url}/api/v2/users/#{encoded_user_id}", nil, headers)

      raise AuthManagementError.new('User update failed', response) if response.code != '204'

      return nil
    end
  end

  def update_user user_id, attributes
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        'Authorization': "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      bodies = []

      name =  "#{attributes[:first_name]} #{attributes[:last_name]}" if attributes[:last_name] and attributes[:first_name]
      bodies.push({
        given_name: attributes[:first_name],
        family_name: attributes[:last_name],
        nickname: attributes[:nickname],
        name: name
      })
      bodies.push({
        password: attributes[:password]
      })
      bodies.push({
        email: attributes[:email]
      })

      # reject any bodies that are not populated
      bodies = bodies
        .map{|body| body.compact}
        .map{|body| body.transform_values{ |value| value == "" ? nil : value } }
        .reject(&:empty?)

      # update the bodies with changed values
      bodies.each do |body|
        response = http.patch("#{@base_url}/api/v2/users/#{encoded_user_id}", body.to_json, headers)
        raise AuthManagementError.new("Difficulty updating #{body.keys.join}", response) if response.code != '200'
      end

      # handle role updates separately
      if attributes[:role]
        get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

        response = http.get(get_roles_url, headers)
  
        raise AuthManagementError.new('User roles fetch failed', response) if response.code != '200'
  
        roles = JSON.parse(response.body)
  
        if roles.length > 0
          request_body = {
            "roles": roles.map{|role| role['id']}
          }

          req = Net::HTTP::Delete.new("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", headers)

          response = http.request(req, request_body.to_json)

          raise AuthManagementError.new('User role flush failed', response) if response.code != '204'
        end

        new_role = getAuth0RoleFromTinySisRole attributes['role']
        request_body = { roles: [ new_role[:id] ] }

        add_roles_url = "#{@base_url}/api/v2/users/#{encoded_user_id}/roles"

        response = http.post(add_roles_url, request_body.to_json, headers)

        raise AuthManagementError.new('User role update failed', response) if response.code.to_i >= 400
      end

      return true
    end
  end

  # generates a semi human readable random password
  DEFAULT_PASSWORD_LENGTH = 20
  def self.random_password(size = DEFAULT_PASSWORD_LENGTH)
    c = %w(b c d f g h j k l m n p qu r s t v w x z ch cr fr nd ng nk nt ph pr rd sh sl sp st th tr)
    v = %w(a e i o u y)
    r = ''
    f = true
    size.times do
      r = r + (f ? c[rand * c.size] : v[rand * v.size])
      f = !f
    end

    r
      .capitalize
      .slice(0, size - 1)
      .concat((rand * 10).round.to_s)
  end

private

  def getAuth0RoleFromTinySisRole roleName
    Rails.application.secrets
      .auth0_management[:roles]
      .find{|role| role[:name] == roleName}
  end

end
