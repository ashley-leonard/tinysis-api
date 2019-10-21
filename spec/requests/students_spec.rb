require 'rails_helper'

RSpec.describe 'Students API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, :email => Faker::Internet.email
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, :email => Faker::Internet.email

    @student1 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)
    @student2 = create :user, coordinator: @staff2, date_active: Date.new(2018, 8, 1)
    @studentInactive = create :user, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(2018, 8, 1), date_inactive: Date.new(2018, 12, 1)
    @studentUnreportable = create :user, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(2017, 8, 1), date_inactive: Date.new(2018, 4, 15)

    @coorTerm = create :term, :name => 'COOR default', :school_year => 2018
    @coorTerm.set_dates 2018, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @coorTerm.save!

    Timecop.freeze(Date.new(2018, 10, 15))
  end

  after do
    Timecop.return
  end

  describe 'GET /api/students' do
    it 'returns all students by default' do
      get '/api/students'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)
    end

    it 'returns all active students' do
      get '/api/students?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)
    end

    it 'returns students of a given coordinator' do
      get "/api/students?coordinatorIds=#{@staff1.id}"
      expect(json).not_to be_empty
      expect(response).to have_http_status(200)
      expect(json['data'].size).to eq(1)
      expect(json['meta']['count']).to eq(1)
    end

    it 'returns students of multiple coordinators' do
      get "/api/students?coordinatorIds=#{@staff1.id},#{@staff2.id}"
      expect(json).not_to be_empty
      expect(response).to have_http_status(200)
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)
    end

    it 'returns all reportable students' do
      get "/api/students?status=reportable"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'returns reportable students of multiple coordinators' do
      get "/api/students?status=reportable&coordinatorIds=#{@staff1.id},#{@staff2.id}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'returns a 400 with bad status param' do
      get "/api/students?status=boo"
      expect(response).to have_http_status(400)
      expect(json).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
