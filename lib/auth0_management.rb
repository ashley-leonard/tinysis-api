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
  end

  def get_access_token
    url = URI("https://#{@config[:domain]}/oauth/token")

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
    url = URI "https://#{@config[:domain]}/api/v2/users?email=#{URI.encode_www_form_component(email_address)}"

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(url, { Authorization: "Bearer #{@auth['access_token']}" })

    response = http.request(request)
  
    users = JSON.parse(response.read_body)

    user = users.first

    puts user.inspect

    encoded_user_id = URI.encode_www_form_component user['user_id']

    url = URI("https://#{@config[:domain]}/api/v2/users/#{encoded_user_id}/roles")
    puts "url #{url.to_s}"
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    

    request = Net::HTTP::Get.new(url, { Authorization: "Bearer #{@auth['access_token']}" })

    response = http.request(request)

    puts response.code

    render json: response.read_body

  end

  def activate_user email, first_name, last_name, role

  end

  def update_user email, first_name, last_name, role

  end

  def deactivate_user email

  end
end
