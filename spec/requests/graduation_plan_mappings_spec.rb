require 'rails_helper'

RSpec.describe 'Graduation plan mappings API', type: :request do

  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config', 'manage:own-reporting'])

    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, :email => Faker::Internet.email

    @student1 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)
    @student2 = create :user, coordinator: @staff1, date_active: Date.new(2018, 8, 1)

    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

    @graduation_plan = create :graduation_plan, user: @student1

    @req1 = create :graduation_plan_requirement, requirement_type: :credit, name: 'Language'
    @req2 = create :graduation_plan_requirement, requirement_type: :credit, name: 'Math'

    credit1 = create :credit, course_name: 'Language 1'
    credit2 = create :credit, course_name: 'Math 1'

    @credit_assignment_1 = create :credit_assignment, credit: credit1, user: @student1
    @credit_assignment_2 = create :credit_assignment, credit: credit2, user: @student1
    @credit_assignment_3 = create :credit_assignment, credit: credit2, user: @student1

    @mapping1 = create :graduation_plan_mapping, graduation_plan_requirement: @req1, credit_assignment: @credit_assignment_1, graduation_plan: @graduation_plan
    @mapping2 = create :graduation_plan_mapping, graduation_plan_requirement: @req2, credit_assignment: @credit_assignment_2, graduation_plan: @graduation_plan
  end

  describe 'GET /api/graduation-plan-mappings/:student_id' do
    it 'returns a 200 with the student\'s mappings' do
      get "/api/graduation-plan-mappings/#{@student1.id}", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['meta']['count']).to eq(2)
      expect(json['data'].length).to eq(2)
    end

    it 'returns a 200 with an empty graduation plan' do
      get "/api/graduation-plan-mappings/#{@student2.id}", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      Rails.logger.info json

      expect(json['meta']['count']).to eq(0)
    end
  end

  # describe 'POST /api/admin/terms' do
  #   it 'returns a 200 with successful term creation' do
  #     postBody = {
  #       data: {
  #         attributes: {
  #           name: Faker::Name.first_name,
  #           schoolYear: 2011,
  #           active: true,
  #           months:  ['2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01', '2012-01-01'],
  #           credit_date: '2012-02-01'
  #         }
  #       }
  #     }
  #     post "/api/admin/terms", params: postBody.to_json, headers: json_request_headers

  #     expect(response).to have_http_status(200)
  #     expect(json).not_to be_empty
  #     expect(json['data']['id']).not_to be_empty

  #     attributes = json['data']['attributes']
  #     %w{firstName lastName login canLogin role isActive}.each do |key|
  #       expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
  #     end

  #     expect(attributes['months'].join(',')).to eq('2011-09-01,2011-10-01,2011-11-01,2011-12-01,2012-01-01')
  #   end

  #   it 'requires minimum input set or yields 422' do
  #     postBody = {
  #       data: {
  #         attributes: {
  #           name: Faker::Name.first_name,
  #         },
  #       }
  #     }
  #     post "/api/admin/terms", params: postBody.to_json, headers: json_request_headers

  #     expect(response).to have_http_status(422)

  #     expect(json).not_to be_empty

  #     expect(json['status']).to eq(422)
  #     expect(json['errors']).not_to be_empty
  #     expect(json['message']).not_to be_empty
  #   end
  # end
end
