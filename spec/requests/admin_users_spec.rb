require 'rails_helper'

RSpec.describe 'Admin users API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, date_active: Date.new(2017, 8, 1), login_status: User::LOGIN_ALLOWED, email: Faker::Internet.email, password: Faker::Internet.password(10, 20)
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, date_active: Date.new(2017, 8, 1), login_status: User::LOGIN_ALLOWED, email: Faker::Internet.email, password: Faker::Internet.password(10, 20)
    @staff_inactive = create :user, privilege: User::PRIVILEGE_STAFF, date_active: Date.new(2017, 8, 1), date_inactive: Date.new(2017, 12, 1), status: User::STATUS_INACTIVE, email: Faker::Internet.email
    @admin = create :user, privilege: User::PRIVILEGE_ADMIN, email: Faker::Internet.email, login_status: User::LOGIN_ALLOWED, password: Faker::Internet.password(10, 20)

    @student1 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)
    @student2 = create :user, coordinator: @staff2, date_active: Date.new(2018, 8, 1)
    @studentInactive = create :user, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(2018, 8, 1), date_inactive: Date.new(2018, 12, 1)
    @studentUnreportable = create :user, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(2017, 8, 1), date_inactive: Date.new(2018, 4, 15)

    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

    @coorTerm = create :term, :name => 'COOR default'
    @coorTerm.set_dates 2018, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @coorTerm.save!

    Timecop.freeze(Date.new(2018, 10, 15))
  end

  after do
    Timecop.return
  end

  describe 'GET /api/admin/users' do
    it 'returns all users by default' do
      get '/api/admin/users'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(8)
      expect(json['meta']['count']).to eq(8)
    end

    it 'returns all active users' do
      get '/api/admin/users?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(5)
      expect(json['meta']['count']).to eq(5)
    end

    it 'returns all active students' do
      get '/api/admin/users?role=student&status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)
    end

    it 'returns students of a given coordinator' do
      get "/api/admin/users?coordinatorIds=#{@staff1.id}"
      expect(json).not_to be_empty
      expect(response).to have_http_status(200)
      expect(json['data'].size).to eq(1)
      expect(json['meta']['count']).to eq(1)
    end

    it 'returns students of multiple coordinators' do
      get "/api/admin/users?coordinatorIds=#{@staff1.id},#{@staff2.id}"
      expect(json).not_to be_empty
      expect(response).to have_http_status(200)
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)
    end

    it 'returns all reportable students' do
      get "/api/admin/users?role=student&status=reportable"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'returns reportable students of multiple coordinators' do
      get "/api/admin/users?status=reportable&coordinatorIds=#{@staff1.id},#{@staff2.id}"
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

    it 'returns a 400 with bad status param' do
      get "/api/admin/users?status=boo"
      expect(response).to have_http_status(400)
      expect(json).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end

  describe 'PUT /api/admin/users/:id' do
    it 'returns a 200 with successful user update' do
      postBody = UserSerializer.new(@student1).serializable_hash

      postBody[:data][:relationships][:coordinator][:data][:id] = @staff2.id

      put "/api/admin/users/#{@student1.id}", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).to eq(@student1.id.to_s)
      expect(json['data']['relationships']['coordinator']['data']['id']).to eq(@staff2.id.to_s)

      @staff1.reload
      @student1.reload

      expect(@staff1.coordinatees).to be_empty
      expect(@staff2.coordinatees.length).to eq(4)
      expect(@student1.coordinator).to eq(@staff2)
    end
  end

  describe 'POST /api/admin/users' do
    it 'returns a 200 with successful user creation' do
      postBody = {
        data: {
          attributes: {
            firstName: Faker::Name.first_name,
            lastName: Faker::Name.last_name,
            login: Faker::Lorem.characters(12),
            canLogin: false,
            role: 'student',
            isActive: true
          },
          relationships: {
            coordinator: {
              data: {
                id: @staff1.id.to_s,
              }
            }
          }
        }
      }
      post "/api/admin/users", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty

      attributes = json['data']['attributes']
      %w{firstName lastName login canLogin role isActive}.each do |key|
        expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
      end
      expect(json['data']['relationships']['coordinator']['data']['id']).to eq(@staff1.id.to_s)
    end

    it 'requires minimum input set or yields 422' do
      postBody = {
        data: {
          attributes: {
            firstName: Faker::Name.first_name,
            lastName: Faker::Name.last_name,
            login: Faker::Lorem.characters(12),
            role: 'student',
          },
        }
      }
      post "/api/admin/users", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
