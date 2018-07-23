require 'rails_helper'

RSpec.describe 'Contracts API', type: :request do

  before(:each) do
    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2

    @term1_2008 = create :term, name: '2008 One', school_year: 2008
    @term2_2008 = create :term, name: '2008 Two', school_year: 2008
    @term1_2009 = create :term, name: '2009 One', school_year: 2009
    @term2_2009 = create :term, name: '2009 Two', school_year: 2009

    @category1 = create :category, name: 'Category 1'
    @category2 = create :category, name: 'Category 2'

    @contract1_2008 = create :contract, term: @term1_2008, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_CLOSED
    @contract2_2008 = create :contract, term: @term2_2008, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract1_2009 = create :contract, term: @term1_2009, facilitator: @staff1, category: @category1, creator: @staff1
    @contract2_2009 = create :contract, term: @term2_2009, facilitator: @staff2, category: @category2, creator: @staff2

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2

    [@contract1_2008, @contract1_2009].each do |contract|
      create :enrollment, participant: @student1, contract: contract, creator: @staff1
    end

    [@contract2_2008, @contract2_2009].each do |contract|
      create :enrollment, participant: @student2, contract: contract, creator: @staff2
    end
  end

  describe 'GET /contracts ' do
    it 'returns all contract records in the system' do
      get '/contracts'

      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['data'].size).to eq(2)
      expect(json['meta']['count']).to eq(2)

      get '/contracts?status=all'
      expect(json['data'].size).to eq(4)
      expect(json['meta']['count']).to eq(4)
    end

  end
end
