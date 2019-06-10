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


  def get_user email_address
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

  def activate_user email, first_name, last_name, *roles
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      get_user_url = URI("#{@base_url}/api/v2/users?q=email:#{URI.encode_www_form_component(email_address)}")

      response = http.get(get_user_url, headers)

      raise AuthManagementError.new('User fetch failed', response) if response.code != '200'
      raise AuthManagementError.new('Auth0 user already created') unless response.body == '[]'

      request_body = { email: email, name: "#{first_name} #{last_name}" }
      response = http.post("#{@base_url}/api/v2/users", request_body.to_json, headers)

      raise AuthManagementError.new('User creation failed', response) if response.code != '200'

      user = response.body

      request_body = { roles: roles }
      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      response = http.post("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", request_body, headers)

      raise AuthManagementError.new('Role update failed', response) if response.code != '200'

      roles = JSON.parse(response.read_body)

      user['roles'] = roles

      return user
    end
  end

  def update_role user_id, role
    url = URI(@base_url)

    Net::HTTP.start(url.host, url.port, { use_ssl: true, verify_mode: OpenSSL::SSL::VERIFY_NONE}) do |http|
      headers = {
        Authorization: "Bearer #{@auth['access_token']}",
        'content-type': 'application/json',
      }

      encoded_user_id = URI.encode_www_form_component(user_id)

      request_body = { roles: ['student', 'admin', 'staff'] }
      response = http.delete("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", request_body, headers)

      raise AuthManagementError.new('User role flush failed', response) if response.code != '200'

      request_body = { roles: [ role ] }
      response = http.patch("#{@base_url}/api/v2/users/#{encoded_user_id}/roles", request_body, headers)

      raise AuthManagementError.new('User role update failed', response) if response.code != '200'

      return JSON.parse(response.read_body)
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
        Authorization: "Bearer #{@auth['access_token']}",
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

      bodies = bodies
        .map{|body| body.compact}
        .map{|body| body.transform_values{ |value| value == "" ? nil : value } }
        .reject(&:empty?)

      return nil if bodies.empty?

      bodies.each do |body|
        Rails.logger.info "***********************************"
        Rails.logger.info "pushing"
        Rails.logger.info body.to_json
        Rails.logger.info "***********************************"

        response = http.patch("#{@base_url}/api/v2/users/#{encoded_user_id}", body.to_json, headers)
Rails.logger.error response.body
        raise AuthManagementError.new("Difficulty updating #{body.keys.join}", response) if response.code != '200'
      end

      return true
    end
  end
end
