require 'rails_helper'

RSpec.describe 'Terms api', type: :request do

  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config'])

    @term1 = create :term, name: 'COOR test', school_year: 2018
    @term1.set_dates 2018, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term1.save!

    @term2 = create :term, name: 'First', school_year: 2018
    @term2.set_dates 2018, [0, 1, 2, 3, 4]
    @term2.save!

    @term3 = create :term, name: 'Second', school_year: 2018
    @term3.set_dates 2018, [5, 6, 7, 8, 9]
    @term3.save!

    @term4 = create :term, name: 'Inactive', school_year: 2017, active: false
    @term4.set_dates 2017, [5, 6, 7, 8, 9]
    @term4.save!

    @term5 = create :term, name: 'COOR inactive', school_year: 2017, active: false
    @term5.set_dates 2017, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term5.save!

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

    it 'returns coor terms' do
      get '/api/terms?type=coor'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)
    end

    it 'returns active COOR term' do
      get'/api/terms?type=coor&status=active'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(1)
      expect(json['meta']['count']).to eq(1)

      term1 = json['data'][0]

      expect(term1['attributes']['name']).to eql(@term1.name)
      expect(term1['attributes']['months'].join(',')).to eql('2018-09-01,2018-10-01,2018-11-01,2018-12-01,2019-01-01,2019-02-01,2019-03-01,2019-04-01,2019-05-01,2019-06-01')
    end

    it 'returns inactive COOR term' do
      get'/api/terms?type=coor&status=inactive'
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(1)
      expect(json['meta']['count']).to eq(1)

      term5 = json['data'][0]
      expect(term5['attributes']['name']).to eql(@term5.name)
      expect(term5['attributes']['months'].join(',')).to eql('2017-09-01,2017-10-01,2017-11-01,2017-12-01,2018-01-01,2018-02-01,2018-03-01,2018-04-01,2018-05-01,2018-06-01')
    end

  end
end
