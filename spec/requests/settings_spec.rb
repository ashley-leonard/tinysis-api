require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config'])
  end

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
