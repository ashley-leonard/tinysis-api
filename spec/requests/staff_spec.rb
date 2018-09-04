require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2
    @staff3 = create :user, privilege: 2, status: User::STATUS_INACTIVE, date_inactive: Date.new(2018, 1, 1)

    @student1 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)
    @student2 = create :user, coordinator: @staff2, date_active: Date.new(2018, 8, 1)
  end

  describe 'GET /api/staff' do

    it 'returns all staff by default' do
      get '/api/staff'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'returns active staff' do
      get '/api/staff?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)
    end

  end
end
