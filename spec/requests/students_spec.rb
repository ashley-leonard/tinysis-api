require 'rails_helper'

RSpec.describe 'Students API', type: :request do
  before(:all) do
    @staff1 = create :user, privilege: 2
    @student1 = create :user, coordinator: @staff1
    @student2 = create :user, coordinator: @staff1
  end

  describe 'GET /students' do
    before { get '/students' }

    it 'returns students' do
      expect(json).not_to be_empty
      expect(json.size).to eq(2)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

end