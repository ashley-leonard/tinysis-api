# lib/auth0_management.rb

# frozen_string_literal: true
require 'net/http'
require 'uri'

class AuthManagement

  def initialize config
    @config = config

    [:domain, :client_secret, :client_id, :audience].each do |setting|
      raise ArgumentError.new("Expected #{setting} to be passed in config") unless @config[setting]
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

    @auth
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

      raise StandardError.new('User fetch failed') if response.code != '200'

      user = JSON.parse(response.body).first

      return nil unless user

      encoded_user_id = URI.encode_www_form_component(user['user_id'])

      get_roles_url = URI("#{@base_url}/api/v2/users/#{encoded_user_id}/roles")

      response = http.get(get_roles_url, headers)

      raise StandardError.new('User roles fetch failed') if response.code != '200'

      roles = JSON.parse(response.body)

      user['roles'] = roles

      user
    end
  end

  def activate_user email, first_name, last_name, role

  end

  def update_user email, first_name, last_name, role

  end

  def deactivate_user email

  end
end
