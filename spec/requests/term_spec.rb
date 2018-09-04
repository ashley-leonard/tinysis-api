require 'rails_helper'

RSpec.describe 'Terms api', type: :request do

  before(:each) do
    create :setting, name: 'reporting_base_month', value: 8
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: 2018

    @term1 = create :term, name: 'COOR test', school_year: 2018
    @term2 = create :term, name: 'First', school_year: 2018
    @term3 = create :term, name: 'Second', school_year: 2018
    @term4 = create :term, name: 'Inactive', school_year: 2017, active: false
    @term5 = create :term, name: 'COOR inactive', school_year: 2017, active: false

    @term1.set_dates 2018, [0, 1, 2, 3, 4, 5, 6, 7, 8]
    @term5.set_dates 2017, [0, 1, 2, 3, 4, 5, 6, 7, 8]

    @term2.set_dates 2018, [0, 1, 2, 3]
    @term3.set_dates 2018, [4, 5, 6, 7]
    @term3.set_dates 2017, [4, 5, 6, 7]
  end

  describe 'GET /api/terms' do

    it 'returns all terms by default' do
      get '/api/terms'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(5)
      expect(json['meta']['count']).to eq(5)
    end

    it 'returns active terms' do
      get '/api/terms?status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)
    end

  end
end
