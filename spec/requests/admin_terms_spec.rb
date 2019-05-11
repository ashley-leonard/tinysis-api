require 'rails_helper'

RSpec.describe 'Admin terms API', type: :request do

  before(:each) do
    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

    @coorTerm = create :term, :name => 'COOR default', :school_year => 2011
    @coorTerm.set_dates 2018, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @coorTerm.save!

    @firstTerm = create :term, :name => 'Term 1 Science', :school_year => 2011
    @firstTerm.set_dates 2018, [0, 1, 2, 3, 4]
    @firstTerm.save!
  end

  describe 'PUT /api/admin/users/:id' do
    it 'returns a 200 with successful term update' do
      postBody = TermSerializer.new(@firstTerm).serializable_hash
      newName = 'Jimmy1Skadoo'

      postBody[:data][:attributes][:name] = newName
      postBody[:data][:attributes][:months] = @firstTerm.months.join(',')

      put "/api/admin/terms/#{@firstTerm.id}", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty

      expect(json['data']['id']).to eq(@firstTerm.id.to_s)
      expect(json['data']['attributes']['name']).to eq(newName)

      @firstTerm.reload

      expect(@firstTerm.name).to eq(newName)
      expect(json['data']['attributes']['name']).to eq(newName)
    end
  end

  describe 'POST /api/admin/terms' do
    it 'returns a 200 with successful term creation' do
      postBody = {
        data: {
          attributes: {
            name: Faker::Name.first_name,
            schoolYear: 2011,
            active: true,
            months: '2011-09-01,2011-10-01,2011-11-01,2011-12-01,2012-01-01',
            credit_date: '2012-02-01'
          }
        }
      }
      post "/api/admin/terms", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data']['id']).not_to be_empty

      attributes = json['data']['attributes']
      %w{firstName lastName login canLogin role isActive}.each do |key|
        expect(attributes[key]).to eq(postBody[:data][:attributes][key.to_sym])
      end

      expect(attributes['months'].join(',')).to eq('2011-09-01,2011-10-01,2011-11-01,2011-12-01,2012-01-01')
    end

    it 'requires minimum input set or yields 422' do
      postBody = {
        data: {
          attributes: {
            name: Faker::Name.first_name,
          },
        }
      }
      post "/api/admin/terms", params: postBody.to_json, headers: json_request_headers

      expect(response).to have_http_status(422)

      expect(json).not_to be_empty

      expect(json['status']).to eq(422)
      expect(json['errors']).not_to be_empty
      expect(json['message']).not_to be_empty
    end
  end
end
