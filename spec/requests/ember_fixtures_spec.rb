#
# bundle exec rspec --example "Ember"
#

require 'rails_helper'

def writeFixture(file, fixture)

  pathName =  Rails.root.join('tmp', file)
  pretty = JSON.pretty_generate(JSON.parse(fixture))
  output = <<END
export default #{pretty};
END
  File.open(pathName, 'w') do |f|
    f.write(output)
  end
end

RSpec.describe 'Ember fixtures script', type: :request do

  current_year = 2019

  before(:each) do
    last_year = current_year - 1

    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: current_year

    @staff1 = create :user, privilege: 2
    @staff2 = create :user, privilege: 2
    @staff3 = create :user, privilege: 2, status: User::STATUS_INACTIVE, date_inactive: Date.new(2018, 1, 1)

    @term1_last = create :term, name: 'Last One', school_year: last_year
    @term2_last = create :term, name: 'Last Two', school_year: last_year
    @term1_current = create :term, name: 'Current One', school_year: current_year
    @term2_current = create :term, name: 'Current Two', school_year: current_year

    @term1_last.set_dates(last_year, [0, 1, 2, 3, 4])
    @term2_last.set_dates(last_year, [5, 6, 7, 8, 9])
    @term1_last.save!
    @term2_last.save!

    @term1_current.set_dates(last_year, [0, 1, 2, 3, 4])
    @term2_current.set_dates(last_year, [5, 6, 7, 8, 9])
    @term1_current.save!
    @term2_current.save!

    @term_coor_last = create :term, name: 'COOR Last', school_year: current_year, active: false
    @term_coor_last.set_dates last_year, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term_coor_last.save!

    @term_coor_current = create :term, name: 'COOR Current', school_year: current_year
    @term_coor_current.set_dates current_year, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term_coor_current.save!

    @category1 = create :category, name: 'Category 1'
    @category2 = create :category, name: 'Category 2'

    @contract1_last = create :contract, term: @term1_last, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_CLOSED
    @contract2_last = create :contract, term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract1_current = create :contract, term: @term1_current, facilitator: @staff1, category: @category1, creator: @staff1
    @contract2_current = create :contract, term: @term2_current, facilitator: @staff2, category: @category2, creator: @staff2

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1, date_active: Date.new(last_year, 8, 1)
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, date_active: Date.new(last_year, 8, 1)
    @student3 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(last_year, 8, 1), date_inactive: Date.new(current_year, 10, 1)

    [@contract1_last, @contract1_current].each do |contract|
      create :enrollment, participant: @student1, contract: contract, creator: @staff1
      create :enrollment, participant: @student3, contract: contract, creator: @staff1
    end

    [@contract2_last, @contract2_current].each do |contract|
      create :enrollment, participant: @student2, contract: contract, creator: @staff2
    end

    [@contract1_last, @contract2_last].each do |contract|
      contract.enrollments.each do |enrollment|
        contract.term.months.each do |month|
          create :status, statusable: enrollment, month: month, author: contract.facilitator
        end
      end
    end

    [@contract1_current, @contract2_current].each do |contract|
      contract.enrollments.each do |enrollment|
        months = *(contract.term.months[0]..contract.term.months[2])
        months.each do |month|
          create :status, statusable: enrollment, month: month, author: contract.facilitator
        end
      end
    end

    @term_coor_last.months.each do |month|
      [@student1, @student2, @student3].each do |student|
        create :status, statusable: student, month: month, author: student.coordinator
      end
    end

    months = *(@term_coor_current.months[0]..@term_coor_current.months[1])
    months.each do |month|
      [@student1, @student2, @student3].each do |student|
        create :status, statusable: student, month: month, author: student.coordinator
      end
    end
  end

  describe 'write' do
    it 'all' do
      travel_to Date.new(current_year, 11, 15) do

        # general
        #
        %w{contracts students staff terms settings}.each do |fixture|
          get "/api/#{fixture}"

          writeFixture "#{fixture}.js", response.body
        end

        get('/api/terms?type=coor&status=active')
        writeFixture "coor-terms.js", response.body

        # coor
        #
        get("/api/students?coordinator_id=#{@staff2.id}&status=reportable&order=lastName,firstName");
        writeFixture "coor-students.js", response.body

        get("/api/statuses?student_ids=#{@staff2.coordinatees.map{|student| student.id}.join(',')}&months=#{@term_coor_current.months.join(',')}&type=student")
        writeFixture "coor-statuses.js", response.body

        # all-coor
        #
        get("/api/students?status=reportable&order=lastName,firstName&limit=-1");
        writeFixture "all-coor-students.js", response.body

        get("/api/staff?status=active&coordinators=true&order=lastName,firstName")
        writeFixture "all-coor-staff.js", response.body

        studentIds = [@student1.id, @student2.id, @student3.id]
        query = {studentIds: studentIds.join(','), months: @term_coor_current.months.join(','), type: 'student', limit: -1}.to_query
        get("/api/statuses?#{query}")
        writeFixture "all-coor-statuses.js", response.body
      end
    end
  end

end
