require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2
    @student1 = create :user, coordinator: @staff1
    @student2 = create :user, coordinator: @staff2
    @studentInactive = create :user, coordinator: @staff2, status: 2, date_inactive: Date.today
  end

  describe 'GET /students ' do
    it 'returns all active students by default' do
      get '/students'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(2)
    end

    it 'returns students of a given coordinator' do
      get "/students?coordinator_id=#{@staff1.id}"
      expect(json).not_to be_empty
      expect(response).to have_http_status(200)
      expect(json['data'].size).to eq(1)
    end

    it 'returns students all students including inactive' do
      get "/students?status=all"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
    end

    it 'returns a 400 with bad status param' do
      get "/students?status=boo"
      expect(response).to have_http_status(400)
      expect(json).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
