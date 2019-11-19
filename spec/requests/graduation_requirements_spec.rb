require 'rails_helper'

RSpec.describe 'Graduation plan requirements API', type: :request do

  before(:each) do
    @grad1 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active'
    @grad2 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active'
    @grad3 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active', parent: @grad2
    @grad4 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active', parent: @grad2
    @grad5 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'inactive'
  end

  describe 'GET /api/admin/graduation-plan-requirements' do
    it 'returns all requirements' do
      get '/api/graduation-plan-requirements'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(5)
      expect(json['meta']['count']).to eq(5)
    end
  end

  describe 'GET /api/graduation-plan-requirements/:id' do
    it 'returns a 200 with successful get' do
      get "/api/graduation-plan-requirements/#{@grad2.id}", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).to eq(@grad2.id.to_s)
      expect(json['data']['relationships']['children']['data'].length).to eq(@grad2.children.length)
      expect(json['data']['attributes']['name']).to eq(@grad2.name)
    end
  end
end
