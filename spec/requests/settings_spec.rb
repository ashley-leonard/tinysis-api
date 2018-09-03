require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:each) do

    create :setting, name: 'reporting_base_month', value: 8
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

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
