module TestRequests

  def setupContract
    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, email: Faker::Internet.email
    @student1 = create :user, coordinator: @staff1
    @student2 = create :user, coordinator: @staff2
    @term = create :term, name: 'Wazoo', school_year: 2018
    @term.set_dates 2018, [0, 1, 2, 3, 4]
    @term.save!

    @category = create :category
    @contract = create :contract, term: @term, facilitator: @staff1, category: @category, creator: @staff1
    @enrollment1 = create :enrollment, participant: @student1, contract: @contract, creator: @staff1
    @enrollment2 = create :enrollment, participant: @student2, contract: @contract, creator: @staff1

    @credit = create :credit, course_name: 'Boo'
  end

  def setupEnrollments
    setupContract

    @statusCoor01Jan = create :status, statusable: @student1, month: '2018-01-01', creator: @staff1
    @statusCoor02Jan = create :status, statusable: @student2, month: '2018-01-01', creator: @staff1
    @statusCoor01Feb = create :status, statusable: @student1, month: '2018-02-01', creator: @staff1
    @statusCoor02Feb = create :status, statusable: @student2, month: '2018-02-01', creator: @staff1
    @statusCoor01Mar = create :status, statusable: @student1, month: '2018-03-01', creator: @staff1
    @statusCoor02Mar = create :status, statusable: @student2, month: '2018-03-01', creator: @staff1

    @statusContract01Jan = create :status, statusable: @enrollment1, month: '2018-01-01', creator: @staff1
    @statusContract02Jan = create :status, statusable: @enrollment2, month: '2018-01-01', creator: @staff2
    @statusContract01Feb = create :status, statusable: @enrollment1, month: '2018-02-01', creator: @staff1
    @statusContract02Feb = create :status, statusable: @enrollment2, month: '2018-02-01', creator: @staff2
    @statusContract01Mar = create :status, statusable: @enrollment1, month: '2018-03-01', creator: @staff1
    @statusContract02Mar = create :status, statusable: @enrollment2, month: '2018-03-01', creator: @staff2
  end

  def json_request_headers
    { 'Content-Type' => 'application/json', 'Accept' => 'application/json' }
  end
end

RSpec.configure do |config|
  config.include TestRequests
end