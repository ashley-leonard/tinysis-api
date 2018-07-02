require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:all) do
    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2
    @student1 = create :user, coordinator: @staff1
    @student2 = create :user, coordinator: @staff2
    @studentInactive = create :user, coordinator: @staff2, status: 2
  end

  describe 'GET /students ' do
    it 'returns all active students by default' do
      get '/students'
      expect(json).not_to be_empty
      expect(json.size).to eq(2)
    end

    it 'returns status code 200' do
      get '/students'
      expect(response).to have_http_status(200)
    end

    it 'returns students of a given coordinator' do
      get "/students?coordinator_id=#{@staff1.id}"
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

  end

end
