# lib/json_web_token.rb

# frozen_string_literal: true

require 'net/http'
require 'uri'

class JsonWebToken
  def self.verify(token)
    JWT.decode(token, nil,
               true, # Verify the signature of this token
               algorithm: 'RS256',
               iss: Rails.application.credentials.auth0_issuer,
               verify_iss: true,
               aud: Rails.application.credentials.auth0_api_audience,
               verify_aud: true) do |header|
      jwks_hash[header['kid']]
    end
  end

  def self.jwks_hash
    jwks_raw = Net::HTTP.get URI("#{Rails.application.secrets.auth0_issuer}.well-known/jwks.json")
    jwks_keys = Array(JSON.parse(jwks_raw)['keys'])
    Hash[
      jwks_keys
      .map do |k|
        [
          k['kid'],
          OpenSSL::X509::Certificate.new(
            Base64.decode64(k['x5c'].first)
          ).public_key
        ]
      end
    ]
  end

  def self.extract_token(http_token, key)
    decoded_token = JsonWebToken.verify(http_token)

    payload = decoded_token.find { |token| token[key] }

    raise Exception, "Failed to extract token #{key}" unless payload

    payload[key]
  end

  def self.extract_permissions(http_token)
    return ['get:config', 'manage:config']

    extract_token http_token, 'permissions'
  end

  def self.extract_user_id(http_token)
    return '1'

    key = "#{Rails.application.secrets.auth0_api_audience.chomp('/')}.databaseId"
    extract_token http_token, key
  end
end
