# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Students API', type: :request do
  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email
    @staff3 = create :user, privilege: User::PRIVILEGE_STAFF, status: User::STATUS_INACTIVE, date_inactive: Date.new(2018, 1, 1), email: Faker::Internet.email

    @student1 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)
    @student2 = create :user, coordinator: @staff2, date_active: Date.new(2018, 8, 1)
  end

  describe 'GET /api/staff' do
    it 'returns all staff by default' do
      get '/api/staff'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      users = User.where('privilege IN (?)', [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN])

      expect(json['data'].size).to eq(users.length)
      expect(json['meta']['count']).to eq(users.length)
    end

    it 'returns active staff' do
      get '/api/staff?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      users = User.where('(privilege IN (?)) AND (status = ?)', [User::PRIVILEGE_STAFF, User::PRIVILEGE_ADMIN], User::STATUS_ACTIVE)

      expect(json['data'].size).to eq(users.length)
      expect(json['meta']['count']).to eq(users.length)
    end
  end
end
