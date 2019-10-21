require 'rails_helper'

RSpec.describe 'Credits API', type: :request do

  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config'])
    Credit.create! course_name: 'Hello', course_id: '100', status: 'active', course_type: 'course'
    Credit.create! course_name: 'Goodbye', course_id: '200', status: 'active', course_type: 'course'
    Credit.create! course_name: 'General', course_id: '400', status: 'active', course_type: 'general'
    @inactive = Credit.create! course_name: 'Inactive', course_id: '420', status: 'inactive', course_type: 'general'
  end

  describe 'GET /api/credits' do

    it 'returns all credits by default' do
      get '/api/credits'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)
    end

    it 'can filter by status' do
      get '/api/credits?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'can filter by search string' do
      get '/api/credits?search=Hello'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(1)
      expect(json['meta']['count']).to eq(1)
    end

  end

  describe "GET /api/credits/:id" do
    it 'can fetch one credit' do
      get "/api/credits/#{@inactive.id}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']).to be_present
    end
  end

  describe "PUT /api/admin/credits/:id" do
    it 'can update one credit' do
      @inactive.course_name = "altered"
      body = { data: { attributes: @inactive.attributes }}
      put "/api/admin/credits/#{@inactive.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']).to be_present
      expect(json['data']['attributes']['courseName']).to eq('altered')
    end
  end

  describe "POST /api/admin/credits" do
    it 'can add one credit' do
      body = {
        data: {
          attributes: {
            courseName: 'my new one',
            courseType: 'general',
            courseId: 'ABC123'
          }
        }
      }
      post "/api/admin/credits", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']).to be_present
      expect(json['data']['attributes']['courseName']).to eq('my new one')
      expect(Credit.count).to eq(5)
    end
  end
end
