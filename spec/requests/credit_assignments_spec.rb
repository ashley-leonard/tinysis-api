require 'rails_helper'

RSpec.describe 'Credit assignments API', type: :request do

  before(:each) do
    setup_contract

    @credit1 = create :credit, course_name: 'Language 1'
    @credit2 = create :credit, course_name: 'Math 1'

    contract_term = @enrollment1.contract.term

    @credit_assignment_1 = create :credit_assignment, credit: @credit1, user: @student1, contract_term: contract_term
    @credit_assignment_2 = create :credit_assignment, credit: @credit2, user: @student1, contract_term: contract_term
    @credit_assignment_3 = create :credit_assignment, credit: @credit2, user: @student1, contract_term: contract_term

    @credit_assignment_4 = create :credit_assignment, credit: @credit1, user: @student2, contract_term: contract_term
    @credit_assignment_5 = create :credit_assignment, credit: @credit2, user: @student2, contract_term: contract_term
    @credit_assignment_6 = create :credit_assignment, credit: @credit2, user: @student2, contract_term: contract_term

    @credit_assignment_7 = create :credit_assignment, credit: @credit2, enrollment: @enrollment1, credit_hours: 1
  end

  describe 'GET /api/credit-assignments' do
    it 'returns a 200 with all assignments' do
      get "/api/credit-assignments", headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['meta']['count']).to eq(7)
      expect(json['data'].length).to eq(7)
    end

    it 'returns a 200 for a single credit assignment' do
      get "/api/credit-assignments/#{@credit_assignment_6.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']).not_to be_empty
      expect(json['data']['id']).to eq(@credit_assignment_6.id.to_s)
      expect(json['data']['type']).to eq('creditAssignment')
    end
  end

  describe 'DELETE credit-assignments' do
    before(:each) do
      @combined = CreditAssignment.combine @student1, @credit1.id, @term.id, 3.0, [@credit_assignment_1, @credit_assignment_2], @staff1
    end

    it 'returns a 204 with successful deletion of a combined credit assignment' do
      delete "/api/credit-assignments/#{@combined.id}", headers: json_request_headers

      expect(response).to have_http_status(204)
      expect(response.body).to be_empty
    end
  end
  
  describe 'POST credit-assignments' do
    it 'returns a 200 with successful creation of a credit assignment bound to an enrollment' do
      body = {params: body.to_json, 
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
      expect(json['data']['relationships']['user']['data']['id']).to eq(@student1.id.to_s)
      expect(json['data']['relationships']['contractTerm']['data']['id']).to eq(@enrollment1.contract.term.id.to_s)
      expect(json['data']['relationships']['credit']['data']['id']).to eq(@credit1.id.to_s)
      expect(json['data']['relationships']['childCreditAssignments']['data'][0]['id']).to eq(@credit_assignment_1.id.to_s)
      expect(json['data']['relationships']['childCreditAssignments']['data'][1]['id']).to eq(@credit_assignment_2.id.to_s)
    end
  end

  describe 'PUT credit_assignments/:id' do
    it 'returns 200 with an updated credit with valid updates' do
      note_text = Faker::Lorem.sentence
      body = {
        data: {
          attributes: {
            creditHours: 2.45,
            note: note_text
          },
          relationships: {
            credit: { data: { id: @credit1.id } },
          }
        }
      }

      expect(@credit_assignment_7.credit.id).to eq(@credit2.id)
      expect(@credit_assignment_7.enrollment.id).to eq(@enrollment1.id)
      expect(@credit_assignment_7.credit_hours).to eq(1)

      put "/api/credit-assignments/#{@credit_assignment_7.id}", params: body.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).to eq(@credit_assignment_7.id.to_s)

      expect(json['data']['attributes']['creditHours']).to eq(body[:data][:attributes][:creditHours])
      expect(json['data']['attributes']['overrideHours']).to eq(nil)
      expect(json['data']['relationships']['credit']['data']['id']).to eq(@credit1.id.to_s)
      expect(json['data']['relationships']['enrollment']['data']['id']).to eq(@enrollment1.id.to_s)
      expect(json['data']['relationships']['notes']['data'].length).to eq(1)

      @credit_assignment_7.reload

      expect(@credit_assignment_7.credit.id).to eq(@credit1.id)
      expect(@credit_assignment_7.enrollment.id).to eq(@enrollment1.id)
      expect(@credit_assignment_7.credit_hours).to eq(body[:data][:attributes][:creditHours])
      expect(@credit_assignment_7.notes).not_to be_empty
      expect(@credit_assignment_7.notes.first.note).to eq(note_text)
    end
  end
end
