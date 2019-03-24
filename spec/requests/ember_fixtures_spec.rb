# frozen_string_literal: true

#
# bundle exec rspec --example "Ember"
#

require 'rails_helper'

def write_fixture(request, file)
  get(request)

  raise 'Invalid request' if response.status > 200

  fixture = response.body
  path_name = Rails.root.join('tmp', file)
  pretty = JSON.pretty_generate(JSON.parse(fixture))
  output = <<~END
    // GET #{request}
    export default #{pretty};
  END

  File.open(path_name, 'w') do |f|
    f.write(output)
  end

  response
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

    (1..2).each do |category_num|
      category_name = "Category #{category_num}"
      (1..2).each do |ealr_num|
        seq = "#{category_num}.#{ealr_num}"
        create :ealr, category: category_name, seq: seq
      end
    end

    Ealr.all.each do |ealr|
      @contract1_current.ealrs << ealr
    end
    @contract1_current.save!

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff1, date_active: Date.new(last_year, 8, 1)
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, date_active: Date.new(last_year, 8, 1)
    @student3 = create :user, privilege: User::PRIVILEGE_STUDENT, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(last_year, 8, 1), date_inactive: Date.new(current_year, 10, 1)
    @students = [@student1, @student2, @student3]
    
    # current contracts should have active enrollments.

    # closed contracts should have fulfilled enrollments.
    # their credits should be transferred to the students.
    [@contract1_last, @contract1_current].each do |contract|
      enrollment = create :enrollment, participant: @student1, contract: contract, creator: contract.facilitator
      create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 1
      create :note, note: "Note for #{@student1.last_name}", notable: enrollment, creator: contract.facilitator

      enrollment = create :enrollment, participant: @student3, contract: contract, creator: contract.facilitator
      create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 1
      create :note, note: "Note for #{@student3.last_name}", notable: enrollment, creator: contract.facilitator
    end

    [@contract2_last, @contract2_current].each do |contract|
      enrollment = create :enrollment, participant: @student2, contract: contract, creator: contract.facilitator
      create :credit_assignment, enrollment: enrollment, credit: @credit2, credit_hours: 2
    end

    # statuses for all months of the previous contracts
    [@contract1_last, @contract2_last].each do |contract|
      contract.enrollments.each do |enrollment|
        contract.term.months.each do |month|
          create :status, statusable: enrollment, month: month, creator: contract.facilitator
        end
      end
    end

    # statuses for the first three months of the current contracts
    [@contract1_current, @contract2_current].each do |contract|
      contract.enrollments.each do |enrollment|
        months = [contract.term.months[0], contract.term.months[1], contract.term.months[2]]
        months.each do |month|
          status = create :status, statusable: enrollment, month: month, creator: contract.facilitator
          create :note, creator: contract.facilitator, notable: status, note: "Note by #{contract.facilitator.last_name} for #{month} enrollment of #{enrollment.participant.last_name} in #{contract.name}"
        end
      end
    end

    # coor statuses for all months of the last coor
    @term_coor_last.months.each do |month|
      @students.each do |student|
        status = create :status, statusable: student, month: month, creator: student.coordinator
        create :note, creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
      end
    end

    # coor statuses for the first two months of the current coor
    months = [@term_coor_current.months[0], @term_coor_current.months[1]]
    months.each do |month|
      @students.each do |student|
        status = create :status, statusable: student, month: month, creator: student.coordinator
        create :note, creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
      end
    end

    # create five assignments and turnins for the contract 1 current
    enrollment = @contract1_current.enrollments.find{|e| e.participant == @student1}
    (1..5).each do |assignment_number|
      assignment = create :assignment, contract: @contract1_current, creator: @contract1_current.facilitator, name: "Assignment #{assignment_number}", description: "Here is assignment number #{assignment_number}", due_date: @term1_current.months[0] + assignment_number.days
      turnin = create :turnin, enrollment: enrollment, assignment: assignment, status: :complete
      create :note, notable: turnin, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / assignment #{assignment_number}"
    end

    # for contract 1, define 5 meetings which are attended only by student 3
    enrollment3 = @contract1_current.enrollments.find{|e| e.participant == @student3}
    (1..5).each do |meeting_number|
      meeting = create :meeting, contract: @contract1_current, meeting_date: @contract1_current.term.months.first + meeting_number.days
      meeting_participant = create :meeting_participant, meeting: meeting, enrollment: enrollment, participation: MeetingParticipant::PRESENT
      create :note, notable: meeting_participant, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / meeting #{meeting_number}"

      meeting_participant = create :meeting_participant, meeting: meeting, enrollment: enrollment3, participation: MeetingParticipant::ABSENT
      create :note, notable: meeting_participant, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student3.last_name} / assignment #{meeting_number}"
    end
  end

  describe 'write' do
    it 'all' do
      travel_to Date.new(current_year, 11, 15) do
        # general
        #
        %w[contracts students staff terms settings categories].each do |fixture|
         write_fixture "/api/#{fixture}", "#{fixture}.js"
        end

        # active coor terms
        write_fixture '/api/terms?type=coor&status=active', 'coor-terms.js'

        # contract detail
        write_fixture "/api/contracts/#{@contract1_current.id}?include=category,facilitator,assignments,meetings,creditAssignments,creditAssignments.credit,term,ealrs", 'contract-detail.js'

        # contract assignments
        write_fixture "/api/assignments?contractIds=#{@contract1_current.id}", 'contract-assignments.js'

        # enrollments fixture for contract assignments page
        response = write_fixture "/api/enrollments?contractIds=#{@contract1_current.id}&include=turnins,participant", 'contract-assignment-enrollments.js'

        # notes for the contract assignment turnins
        contract_enrollments_response = JSON.parse(response.body)
        turnin_ids = contract_enrollments_response['included']
          .select{ |include| include['type'] == 'turnin' }
          .map{ |include| include['id'] }
        write_fixture "/api/notes?notableType=Turnin&notableIds=#{turnin_ids.join(',')}", 'notes-contract-assignments.js'

        # contract enrollment status detail
        enrollment = @contract1_current.enrollments.first
        write_fixture "/api/enrollments/#{enrollment.id}?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit", 'contract-enrollment-detail.js'

        # enrollments by contract
        response = write_fixture "/api/enrollments?contractIds=#{@contract1_current.id}&include=creditAssignments,creditAssignments.credit,participant", 'contract-enrollments.js'

        # notes for the contract enrollments
        contract_enrollments_response = JSON.parse(response.body)
        enrollment_ids = contract_enrollments_response["data"].map{|enrollment| enrollment["id"]}
        write_fixture "/api/notes?notableType=Enrollment&notableIds=#{enrollment_ids.join(',')}", 'notes-contract-enrollments.js'

        # status by contract enrollments
        response = write_fixture "/api/statuses?enrollmentIds=#{enrollment_ids.join(',')}", 'contract-statuses.js'

        # notes for the contract enrollment statuses
        contract_status_response = JSON.parse(response.body)
        status_ids = contract_status_response["data"].map{|status| status["id"]}
        write_fixture "/api/notes?notableType=Status&notableIds=#{status_ids.join(',')}", 'notes-contract-statuses.js'

        # students for a coordinator
        write_fixture "/api/students?coordinator_id=#{@staff2.id}&status=reportable&order=lastName,firstName", 'coor-students.js'

        # statuses for a coordinator's students
        write_fixture "/api/statuses?student_ids=#{@staff2.coordinatees.map(&:id).join(',')}&months=#{@term_coor_current.months.join(',')}&type=student", 'coor-statuses.js'

        # all active students for all-coor summary
        write_fixture '/api/students?status=reportable&order=lastName,firstName&limit=-1', 'all-coor-students.js'

        # all active coordinators
        write_fixture '/api/staff?status=active&coordinators=true&order=lastName,firstName', 'all-coor-staff.js'

        # all coor status records for active students
        student_ids = @students.map(&:id).join(',')
        query = { studentIds: student_ids, months: @term_coor_current.months.join(','), type: 'student', limit: -1 }.to_query
        response = write_fixture "/api/statuses?#{query}", 'all-coor-statuses.js'

        # notes for a coor status
        coor_status_response = JSON.parse(response.body)
        statusable_ids = coor_status_response["data"].map{|status| status["id"]}
        write_fixture "/api/notes?notableType=Status&notableIds=#{statusable_ids.join(',')}", 'notes-coor-statuses.js'

        # student detail
        write_fixture "/api/students/#{@student1.id}", 'student.js'

        # student enrollments
        Rails.logger.info "*********"
        Rails.logger.info "GENERATING CONTRACT ENROLLMENTS"
        Rails.logger.info "*********"
        response = write_fixture "/api/enrollments?participantIds=#{@student1.id}&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant", 'student-enrollments.js'

        # statuses for enrollments
        student_enrollments_response = JSON.parse(response.body)
        student_enrollment_ids = student_enrollments_response['data'].map{|enrollment| enrollment["id"]}
        Rails.logger.info "*********"
        Rails.logger.info student_enrollment_ids
        Rails.logger.info "*********"
        response = write_fixture "/api/statuses?enrollmentIds=#{student_enrollment_ids.join(',')}", 'student-enrollments-statuses.js'

        # notes for statuses for enrollments
        student_enrollments_status_response = JSON.parse(response.body)
        status_ids = student_enrollments_status_response["data"].map{|status| status["id"]}
        write_fixture "/api/notes?notableType=Status&notableIds=#{status_ids.join(',')}", 'notes-student-enrollment-statuses.js'

        # statuses for coor
        query = { studentIds: @student1.id, months: @term_coor_current.months.join(','), limit: -1 }.to_query
        response = write_fixture "/api/statuses?#{query}", 'student-statuses.js'

        # notes for coor statuses
        student_status_response = JSON.parse(response.body)
        status_ids = student_status_response["data"].map{|status| status["id"]}
        write_fixture "/api/notes?notableType=Status&notableIds=#{status_ids.join(',')}", 'notes-student-statuses.js'
      end
    end
  end
end
