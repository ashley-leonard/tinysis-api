require 'rails_helper'

RSpec.describe 'Statuses API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2
    @student1 = create :user, coordinator: @staff1
    @student2 = create :user, coordinator: @staff2
    @term = create :term
    @category = create :category
    @contract = create :contract, term: @term, facilitator: @staff1, category: @category, creator: @staff1
    @enrollment1 = create :enrollment, participant: @student1, contract: @contract, creator: @staff1
    @enrollment2 = create :enrollment, participant: @student2, contract: @contract, creator: @staff1

    @statusCoor01Jan = create :status, statusable: @student1, month: '2018-01-01', author: @staff1
    @statusCoor02Jan = create :status, statusable: @student2, month: '2018-01-01', author: @staff1
    @statusCoor01Feb = create :status, statusable: @student1, month: '2018-02-01', author: @staff1
    @statusCoor02Feb = create :status, statusable: @student2, month: '2018-02-01', author: @staff1
    @statusCoor01Mar = create :status, statusable: @student1, month: '2018-03-01', author: @staff1
    @statusCoor02Mar = create :status, statusable: @student2, month: '2018-03-01', author: @staff1

    @statusContract01Jan = create :status, statusable: @enrollment1, month: '2018-01-01', author: @staff1
    @statusContract02Jan = create :status, statusable: @enrollment2, month: '2018-01-01', author: @staff2
    @statusContract01Feb = create :status, statusable: @enrollment1, month: '2018-02-01', author: @staff1
    @statusContract02Feb = create :status, statusable: @enrollment2, month: '2018-02-01', author: @staff2
    @statusContract01Mar = create :status, statusable: @enrollment1, month: '2018-03-01', author: @staff1
    @statusContract02Mar = create :status, statusable: @enrollment2, month: '2018-03-01', author: @staff2
  end

  describe 'GET /statuses ' do
    it 'returns all status records in the system' do
      get '/statuses'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(12)
      expect(json['meta']['count']).to eq(12)
    end

    it 'returns all status records for a given month' do
      get '/statuses?months=2018-01-01,2018-02-01'

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
      get "/statuses?enrollment_ids=#{@enrollment1.id},#{@enrollment2.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(6)
      expect(json['meta']['count']).to eq(6)

      enrollment1 = json['data'].find_all{|status| status['attributes']['enrollmentId'] == @enrollment1.id}
      enrollment2 = json['data'].find_all{|status| status['attributes']['enrollmentId'] == @enrollment2.id}

      expect(enrollment1.size).to eq(3)
      expect(enrollment2.size).to eq(3)

      expect(enrollment1.first['attributes']['author_id'] == @staff1.id)
      expect(enrollment2.first['attributes']['author_id'] == @staff2.id)
    end

   it 'returns status records for given students' do
      get "/statuses?student_ids=#{@student1.id},#{@student2.id}"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(6)
      expect(json['meta']['count']).to eq(6)

      student1 = json['data'].find_all{|status| status['attributes']['studentId'] == @student1.id}
      student2 = json['data'].find_all{|status| status['attributes']['studentId'] == @student2.id}

      expect(student1.size).to eq(3)
      expect(student2.size).to eq(3)

      expect(student1.first['attributes']['author_id'] == @staff1.id)
      expect(student2.first['attributes']['author_id'] == @staff2.id)
    end

   it 'returns status records by type and by month utilizing abbreviated months syntax' do
      get "/statuses?type=student&months=2018-01,2018-02"

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)

      student1 = json['data'].find_all{|status| status['attributes']['studentId'] == @student1.id}
      student2 = json['data'].find_all{|status| status['attributes']['studentId'] == @student2.id}

      expect(student1.size).to eq(2)
      expect(student2.size).to eq(2)
    end

  end
end
