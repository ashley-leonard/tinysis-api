# frozen_string_literal: true

#
# bundle exec rspec --example "Ember"
#

require 'rails_helper'

def write_fixture(file, response)
  raise 'Invalid request' if response.status > 200

  fixture = response.body
  path_name = Rails.root.join('tmp', file)
  pretty = JSON.pretty_generate(JSON.parse(fixture))
  output = <<~END
    export default #{pretty};
  END

  File.open(path_name, 'w') do |f|
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

    @credit1 = create :credit, course_name: 'Course 1'
    @credit2 = create :credit, course_name: 'Course 2'

    [@contract1_last, @contract1_current].each do |contract|
      ca = create :credit_assignment, credit: @credit1, contract: contract, credit_hours: 1
    end

    [@contract2_last, @contract2_current].each do |contract|
      create :credit_assignment, credit: @credit2, contract: contract, credit_hours: 2
    end

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1, date_active: Date.new(last_year, 8, 1)
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, date_active: Date.new(last_year, 8, 1)
    @student3 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(last_year, 8, 1), date_inactive: Date.new(current_year, 10, 1)
    @students = [@student1, @student2, @student3]

    [@contract1_last, @contract1_current].each do |contract|
      enrollment = create :enrollment, participant: @student1, contract: contract, creator: @staff1
      create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 1
      create :note, note: "Note for #{@student1.last_name}", notable: enrollment, creator: @staff1

      enrollment = create :enrollment, participant: @student3, contract: contract, creator: @staff1
      create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 1
      create :note, note: "Note for #{@student3.last_name}", notable: enrollment, creator: @staff1
    end

    [@contract2_last, @contract2_current].each do |contract|
      enrollment = create :enrollment, participant: @student2, contract: contract, creator: @staff2
      create :credit_assignment, enrollment: enrollment, credit: @credit2, credit_hours: 2
    end

    [@contract1_last, @contract2_last].each do |contract|
      contract.enrollments.each do |enrollment|
        contract.term.months.each do |month|
          create :status, statusable: enrollment, month: month, creator: contract.facilitator
        end
      end
    end

    [@contract1_current, @contract2_current].each do |contract|
      contract.enrollments.each do |enrollment|
        months = *(contract.term.months[0]..contract.term.months[2])
        months.each do |month|
          create :status, statusable: enrollment, month: month, creator: contract.facilitator
        end
      end
    end

    @term_coor_last.months.each do |month|
      @students.each do |student|
        status = create :status, statusable: student, month: month, creator: student.coordinator
        create :note, creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
      end
    end

    months = *(@term_coor_current.months[0]..@term_coor_current.months[1])
    months.each do |month|
      @students.each do |student|
        status = create :status, statusable: student, month: month, creator: student.coordinator
        create :note, creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
      end
    end

    enrollment = @contract1_current.enrollments.find{|e| e.participant == @student1}
    (1..5).each do |assignment_number|
      assignment = create :assignment, contract: @contract1_current, creator: @contract1_current.facilitator, name: "Assignment #{assignment_number}", description: "Here is assignment number #{assignment_number}", due_date: @term1_current.months[0] + assignment_number.days
      turnin = create :turnin, enrollment: enrollment, assignment: assignment, status: :complete
      create :note, notable: turnin, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / assignment #{assignment_number}"
    end
  end

  describe 'write' do
    it 'all' do
      travel_to Date.new(current_year, 11, 15) do
        # general
        #
        %w[contracts students staff terms settings categories].each do |fixture|
          get "/api/#{fixture}"

          write_fixture "#{fixture}.js", response
        end

        get('/api/terms?type=coor&status=active')
        write_fixture 'coor-terms.js', response

        # contract detail
        get("/api/contracts/#{@contract1_current.id}")
        write_fixture 'contract-detail.js', response

        # contract assignments
        get("/api/assignments?contractIds=#{@contract1_current.id}")
        write_fixture 'contract-assignments.js', response

        get("/api/enrollments?contractIds=#{@contract1_current.id}&include=turnins,participant")
        write_fixture 'contract-assignment-enrollments.js', response

        contract_enrollments_response = JSON.parse(response.body)
        turnin_ids = contract_enrollments_response['included']
          .select{ |include| include['type'] == 'turnin' }
          .map{ |include| include['id'] }

        get("/api/notes?notableType=Turnin&notableIds=#{turnin_ids.join(',')}")
        write_fixture 'notes-contract-assignments.js', response

        # enrollments by contract
        get("/api/enrollments?contractIds=#{@contract1_current.id}&include=credit_assignments,credit_assignments.credit,participant")
        write_fixture 'contract-enrollments.js', response

        contract_enrollments_response = JSON.parse(response.body)
        enrollment_ids = contract_enrollments_response["data"].map{|enrollment| enrollment["id"]}

        get("/api/notes?notableType=Enrollment&notableIds=#{enrollment_ids.join(',')}")
        write_fixture 'notes-contract-enrollments.js', response

        # coor
        #
        get("/api/students?coordinator_id=#{@staff2.id}&status=reportable&order=lastName,firstName")
        write_fixture 'coor-students.js', response

        get("/api/statuses?student_ids=#{@staff2.coordinatees.map(&:id).join(',')}&months=#{@term_coor_current.months.join(',')}&type=student")
        write_fixture 'coor-statuses.js', response

        # all-coor
        #
        get('/api/students?status=reportable&order=lastName,firstName&limit=-1')
        write_fixture 'all-coor-students.js', response

        get('/api/staff?status=active&coordinators=true&order=lastName,firstName')
        write_fixture 'all-coor-staff.js', response

        student_ids = @students.map(&:id).join(',')
        query = { studentIds: student_ids, months: @term_coor_current.months.join(','), type: 'student', limit: -1 }.to_query
        get("/api/statuses?#{query}")
        write_fixture 'all-coor-statuses.js', response

        coor_status_response = JSON.parse(response.body)
        statusable_ids = coor_status_response["data"].map{|status| status["id"]}

        get("/api/notes?notableType=Status&notableIds=#{statusable_ids.join(',')}")
        write_fixture 'notes-coor-statuses.js', response

        # status by student
        #
        get("/api/enrollments?participantIds=#{@student1.id},#{@student2.id}&status=enrolled&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant")
        write_fixture 'enrollments.js', response

        # status by student
        #
        get("/api/students/#{@student1.id}")
        write_fixture('student.js', response)

        query = { studentIds: @student1.id, months: @term_coor_current.months.join(','), type: 'student', limit: -1 }.to_query
        get("/api/statuses?#{query}")
        write_fixture 'student-statuses.js', response

        student_status_response = JSON.parse(response.body)
        statusable_ids = student_status_response["data"].map{|status| status["id"]}

        get("/api/notes?notableType=Status&notableIds=#{statusable_ids.join(',')}")
        write_fixture 'notes-student-statuses.js', response
      end
    end
  end
end
