require 'rails_helper'

RSpec.describe 'Credit assignments API', type: :request do

  before(:each) do
    setupContract

    @credit1 = create :credit, course_name: 'Language 1'
    @credit2 = create :credit, course_name: 'Math 1'

    contract_term = @enrollment1.contract.term

    @credit_assignment_1 = create :credit_assignment, credit: @credit1, user: @student1, contract_term: contract_term
    @credit_assignment_2 = create :credit_assignment, credit: @credit2, user: @student1, contract_term: contract_term
    @credit_assignment_3 = create :credit_assignment, credit: @credit2, user: @student1, contract_term: contract_term

    @credit_assignment_4 = create :credit_assignment, credit: @credit1, user: @student2, contract_term: contract_term
    @credit_assignment_5 = create :credit_assignment, credit: @credit2, user: @student2, contract_term: contract_term
    @credit_assignment_6 = create :credit_assignment, credit: @credit2, user: @student2, contract_term: contract_term
  end

  describe 'GET /api/credit-assignments' do
    it 'returns a 200 with all assignments' do
      get "/api/credit-assignments", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['meta']['count']).to eq(6)
      expect(json['data'].length).to eq(6)
    end
  end

  # describe 'DELETE /api/graduation-plan-mappings/:student_id/:mapping_id' do
  #   it 'returns a 204 with successful deletion' do
  #     delete "/api/graduation-plan-mappings/#{@student1.id}/#{@mapping1.id}", headers: json_request_headers

  #     expect(response).to have_http_status(204)
  #     expect(GraduationPlanMapping.find_by_id(@mapping1.id)).to be_nil
  #   end
  # end

  describe 'POST credit-assignments' do
    it 'returns a 200 with successful creation of a credit assignment bound to an enrollment' do
      body = {
        data: {
          attributes: { creditHours: 0.25 },
          relationships: {
            enrollment: { data: { id: @enrollment1.id } },
            credit: { data: { id: @credit1.id } },
          }
        }
      }

      post "/api/enrollments/#{@enrollment1.id}/credit-assignments", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty
      expect(json['data']['attributes']['creditHours']).to eq(0.25)
      expect(json['data']['relationships']['enrollment']['data']['id']).to eq(@enrollment1.id.to_s)
      expect(json['data']['relationships']['credit']['data']['id']).to eq(@credit1.id.to_s)
    end

    it 'returns a 200 with successful creation of a credit assignment derived from two existing credit assignments' do
      body = {
        data: {
          attributes: {
            overrideHours: 5.0,
          },
          relationships: {
            credit: { data: { id: @credit1.id } },
            childCreditAssignments: { data: [ { id: @credit_assignment_1.id }, { id: @credit_assignment_2.id }] },
            contractTerm: { data: { id: @enrollment1.contract.term.id }},
          }
        }
      }

      post "/api/students/#{@student1.id}/credit-assignments", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty
      expect(json['data']['attributes']['creditHours']).to eq(@credit_assignment_1.credit_hours + @credit_assignment_1.credit_hours)
      expect(json['data']['attributes']['overrideHours']).to eq(5.0)
      expect(json['data']['relationships']['contractTerm']['data']['id']).to eq(@enrollment1.contract.term.id.to_s)
      expect(json['data']['relationships']['credit']['data']['id']).to eq(@credit1.id.to_s)
      expect(json['data']['relationships']['childCreditAssignments']['data'][0]['id']).to eq(@credit_assignment_1.id.to_s)
      expect(json['data']['relationships']['childCreditAssignments']['data'][1]['id']).to eq(@credit_assignment_2.id.to_s)
    end
  end
end
