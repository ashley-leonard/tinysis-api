require 'rails_helper'

RSpec.describe 'Admin graduation plan requirements API', type: :request do

  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config', 'manage:config'])

    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

    @grad1 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active'
    @grad2 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active'
    @grad3 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active', parent: @grad2
    @grad4 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'active', parent: @grad2
    @grad5 = create :graduation_plan_requirement, name: Faker::Name.name, status: 'inactive'
  end

  describe 'POST /api/admin/graduation-plan-requirement' do
    it 'returns a 200 with successful requirement creation' do
      postBody = {
        data: {
          attributes: {
            name: Faker::Name.name,
            status: 'inactive',
            requirementType: 'general'
          },
          relationships: {
            parent: {
              data: {
                id: @grad1.id.to_s,
              }
            }
          }
        }
      }
      post "/api/admin/graduation-plan-requirements", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).not_to be_empty

      attributes = json['data']['attributes']
      %w{name status requirementType}.each do |key|
        expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
      end
      expect(json['data']['relationships']['parent']['data']['id']).to eq(@grad1.id.to_s)
    end

    it 'requires minimum input set or yields 422' do
      postBody = {
        data: {
          attributes: {
            requirementType: 'general',
          },
        }
      }
      post "/api/admin/graduation-plan-requirements", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
