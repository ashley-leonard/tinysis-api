# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Settings API', type: :request do
  describe 'GET /api/settings' do
    it 'returns all settings' do
      get '/api/settings'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end
  end
end
