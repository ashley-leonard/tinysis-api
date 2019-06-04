# lib/auth0_management.rb

# frozen_string_literal: true
require 'net/http'
require 'uri'

class Auth0Management

  def self.get_access_token
    config = Rails.application.secrets.auth0_management
    url = URI("https://#{config[:domain]}/oauth/token")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    config = Rails.application.secrets.auth0_management
    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/x-www-form-urlencoded'
    request.body = "grant_type=client_credentials&client_id=#{config[:client_id]}&client_secret=#{config[:client_secret]}&audience=#{config[:audience]}"
    
    response = http.request(request)
    puts response.read_body
  end

end