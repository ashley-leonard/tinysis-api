require 'rails_helper'

RSpec.describe 'Statuses API', type: :request do

  describe 'GET /api/statuses ' do
  before(:each) do
    setupEnrollments

    Timecop.freeze(Date.new(2018, 10, 15))
  end

  after do
    Timecop.return
  end

    it 'returns all status records in the system' do
      get '/api/statuses'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(12)
      expect(json['meta']['count']).to eq(12)
    end

    it 'returns all status records for a given month' do
      get '/api/statuses?months=2018-01-01,2018-02-01'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(8)
      expect(json['meta']['count']).to eq(8)

      january = json['data'].find_all{|status| status['attributes']['month'] == '2018-01-01'}
      february = json['data'].find_all{|status| status['attributes']['month'] == '2018-02-01'}

      expect(january.size).to eq(4)
      expect(february.size).to eq(4)
    end

   it 'returns status records for given enrollments' do
      get "/api/statuses?enrollmentIds=#{@enrollment1.id},#{@enrollment2.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(6)
      expect(json['meta']['count']).to eq(6)

      enrollment1 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @enrollment1.id.to_s}
      enrollment2 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @enrollment2.id.to_s}

      expect(enrollment1.size).to eq(3)
      expect(enrollment2.size).to eq(3)

      expect(enrollment1.first['relationships']['creator']['data']['id'] == @staff1.id)
      expect(enrollment2.first['relationships']['creator']['data']['id'] == @staff2.id)
    end

    it 'returns status records for given students' do
      get "/api/statuses?studentIds=#{@student1.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(3)
      expect(json['meta']['count']).to eq(3)

      student1 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @student1.id.to_s}
      student2 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @student2.id.to_s}

      expect(student1.size).to eq(3)
      expect(student2.size).to eq(0)

      expect(student1.first['relationships']['creator']).not_to be_empty
      expect(student1.first['relationships']['creator']['data']['id']).to eq(@staff1.id.to_s)
    end

    it 'returns status records by type and by month utilizing abbreviated months syntax' do
      get "/api/statuses?type=student&months=2018-01,2018-02"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)

      student1 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @student1.id.to_s}
      student2 = json['data'].find_all{|status| status['relationships']['statusable']['data']['id'] == @student2.id.to_s}

      expect(student1.size).to eq(2)
      expect(student2.size).to eq(2)
    end

  end
end
