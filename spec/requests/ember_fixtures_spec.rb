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

def write_login_fixture user, file
  user_id = Digest::MD5.hexdigest user.email
  fixture = {
    "data": {
      "email": user.email,
      "email_verified": false,
      "updated_at": "2019-06-23T23:44:29.877Z",
      "user_id": "auth0|#{user_id}",
      "name": user.full_name,
      "identities": [
        {
          "connection": "Username-Password-Authentication",
          "provider": "auth0",
          "user_id": user_id,
          "isSocial": false
        }
      ],
      "created_at": "2019-05-25T00:24:18.815Z",
      "last_password_reset": "2019-06-10T04:09:05.883Z",
      "given_name": user.first_name,
      "family_name": user.last_name,
      "nickname": user.nickname,
      "last_login": "2019-06-23T23:44:29.877Z",
      "last_ip": "208.100.155.216",
      "logins_count": 38,
      "roles": [
        {
          "id": "rol_7B7Ic4uF67wTTC1W",
          "name": User::PRIVILEGE_NAMES[user.privilege].downcase,
          "description": "Manage all data, access admin settings",
          "sources": [
            {
              "source_id": "",
              "source_type": "DIRECT",
              "source_name": ""
            }
          ]
        }
      ]
    }
  }

  path_name = Rails.root.join('tmp', file)
  pretty = JSON.pretty_generate(fixture)
  output = <<~END
    // auth for user #{user.id}
    export default #{pretty};
  END

  File.open(path_name, 'w') do |f|
    f.write(output)
  end

  fixture
end

CURRENT_YEAR = 2019
LAST_YEAR = CURRENT_YEAR - 1

RSpec.describe 'Ember fixtures script', type: :request do
  before(:each) do
    allow(JsonWebToken).to receive(:extract_permissions).and_return(['get:config', 'manage:config'])

    create :setting, name: 'reporting_base_month', value: 9
    create :setting, name: 'reporting_end_month', value: 6
    create :setting, name: 'current_year', value: CURRENT_YEAR

    @staff1 = create :user, privilege: User::PRIVILEGE_STAFF, date_active: Date.new(2012, 9, 1), email: Faker::Internet.email
    @staff2 = create :user, privilege: User::PRIVILEGE_STAFF, date_active: Date.new(2013, 2, 1), email: Faker::Internet.email
    @staff3 = create :user, privilege: User::PRIVILEGE_STAFF, status: User::STATUS_INACTIVE, date_active: Date.new(2011, 2, 1), date_inactive: Date.new(2018, 1, 1), email: Faker::Internet.email

    @admin1 = create :user, privilege: User::PRIVILEGE_ADMIN, status: User::STATUS_ACTIVE, date_active: Date.new(2011, 7, 1), email: Faker::Internet.email

    @term1_last = create :term, name: 'Last One', school_year: LAST_YEAR, credit_date: Date.new(LAST_YEAR + 1, 1, 31)
    @term2_last = create :term, name: 'Last Two', school_year: LAST_YEAR, credit_date: Date.new(LAST_YEAR + 1, 6, 15)
    @term1_current = create :term, name: 'Current One', school_year: CURRENT_YEAR, credit_date: Date.new(CURRENT_YEAR + 1, 1, 31)
    @term2_current = create :term, name: 'Current Two', school_year: CURRENT_YEAR, credit_date: Date.new(CURRENT_YEAR + 1, 6, 15)

    @term1_last.set_dates(LAST_YEAR, [0, 1, 2, 3, 4])
    @term2_last.set_dates(LAST_YEAR, [5, 6, 7, 8, 9])
    @term1_last.save!
    @term2_last.save!

    @term1_current.set_dates(CURRENT_YEAR, [0, 1, 2, 3, 4])
    @term2_current.set_dates(CURRENT_YEAR, [5, 6, 7, 8, 9])
    @term1_current.save!
    @term2_current.save!

    @term_coor_last = create :term, name: 'COOR Last', active: false, school_year: LAST_YEAR
    @term_coor_last.set_dates LAST_YEAR, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term_coor_last.save!

    @term_coor_current = create :term, name: 'COOR Current', school_year: CURRENT_YEAR
    @term_coor_current.set_dates CURRENT_YEAR, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    @term_coor_current.save!

    @category1 = create :category, name: 'Category 1'
    @category2 = create :category, name: 'Category 2'

    @contract1_last = create :contract, term: @term1_last, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_CLOSED
    @contract2_last = create :contract, term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract3_last = create :contract, term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract4_last = create :contract, term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
    @contract1_current = create :contract, term: @term1_current, facilitator: @staff1, category: @category1, creator: @staff1
    @contract2_current = create :contract, term: @term1_current, facilitator: @staff2, category: @category2, creator: @staff2

    @credit1 = create :credit, course_name: 'Course 1'
    @credit2 = create :credit, course_name: 'Course 2'

    [@contract1_last, @contract1_current].each do |contract|
      ca = create :credit_assignment, credit: @credit1, contract: contract, credit_hours: 1
    end

    [@contract2_last, @contract2_current, @contract3_last, @contract4_last].each do |contract|
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

    @student1 = create :user, privilege: User::PRIVILEGE_STUDENT, district_id: Random.rand(10 ** 10).to_s, coordinator: @staff1, date_active: Date.new(LAST_YEAR, 8, 1)
    @student2 = create :user, privilege: User::PRIVILEGE_STUDENT, district_id: Random.rand(10 ** 10).to_s, coordinator: @staff2, date_active: Date.new(LAST_YEAR, 8, 1)
    @student3 = create :user, privilege: User::PRIVILEGE_STUDENT, district_id: Random.rand(10 ** 10).to_s, coordinator: @staff2, status: User::STATUS_INACTIVE, date_active: Date.new(LAST_YEAR, 8, 1), date_inactive: Date.new(CURRENT_YEAR, 10, 1)
    @students = [@student1, @student2, @student3]
    
    # current contracts should have active enrollments. reporting as if we are three months into
    # the current contracts.
    [@contract1_current, @contract2_current].each do |contract|
      [@student1, @student3].each do |student|
        enrollment = create :enrollment, participant: student, contract: contract, creator: contract.facilitator
        create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 1
        create :note, note: "Note for #{student.last_name} for enrollment in #{contract.name}", notable: enrollment, creator: contract.facilitator
      end

      contract.enrollments.each do |enrollment|
        months = [contract.term.months[0], contract.term.months[1], contract.term.months[2]]
        months.each do |month|
          status = create :status, statusable: enrollment, month: month, creator: contract.facilitator
          create :note, creator: contract.facilitator, notable: status, note: "Note by #{contract.facilitator.last_name} for #{month} enrollment of #{enrollment.participant.last_name} in #{contract.name}"
        end
      end
    end
  
    # closed contracts should have fulfilled enrollments and finalized credits
    [@contract1_last, @contract2_last, @contract3_last].each do |contract|
      [@student2, @student3].each do |student|
        enrollment = create :enrollment, participant: student, contract: contract, creator: contract.facilitator
        create :credit_assignment, enrollment: enrollment, credit: @credit1, credit_hours: 0.25
        create :credit_assignment, enrollment: enrollment, credit: @credit2, credit_hours: 0.5
        create :note, note: "Note for #{student.last_name} for enrollment in #{contract.name}", notable: enrollment, creator: contract.facilitator

        enrollment.set_closed Enrollment::COMPLETION_FULFILLED, contract.facilitator
        enrollment.set_finalized @admin1
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
      create :note,
        notable: turnin,
        creator: @contract1_current.facilitator,
        note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / assignment #{assignment_number}"
    end

    # for contract 1, define 5 meetings which are attended only by student 3
    enrollment3 = @contract1_current.enrollments.find{|e| e.participant == @student3}
    (1..5).each do |meeting_number|
      meeting = create :meeting, contract: @contract1_current, meeting_date: @contract1_current.term.months.first + meeting_number.days
      meeting_participant = create :meeting_participant, meeting: meeting, enrollment: enrollment, participation: MeetingParticipant::PRESENT
      create :note,
        notable: meeting_participant,
        creator: @contract1_current.facilitator,
        note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / meeting #{meeting_number}"

      meeting_participant = create :meeting_participant, meeting: meeting, enrollment: enrollment3, participation: MeetingParticipant::ABSENT
      create :note, notable: meeting_participant, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student3.last_name} / meeting #{meeting_number}"
    end

    # graduation plans requirements
    gradMath = create :graduation_plan_requirement, name: 'Math', requirement_type: 'credit', position: 1
    gradLang = create :graduation_plan_requirement, name: 'Language', requirement_type: 'credit', position: 2
    gradSci = create :graduation_plan_requirement, name: 'Science', requirement_type: 'credit', position: 3
    gradLang1 = create :graduation_plan_requirement, name: 'Language1', requirement_type: 'credit', parent: gradLang, position: 1
    gradLang2 = create :graduation_plan_requirement, name: 'Language2', requirement_type: 'credit', parent: gradLang, position: 2
    gradDefunct = create :graduation_plan_requirement, name: 'Defunct', requirement_type: 'credit', status: GraduationPlanRequirement::STATUS_INACTIVE, position: 3
    gradGeneral1 = create :graduation_plan_requirement, name: 'General1', requirement_type: 'general', position: 1
    create :graduation_plan_requirement, name: 'General2', requirement_type: 'general', position: 2
    gradService1 = create :graduation_plan_requirement, name: 'Service1', requirement_type: 'service', position: 1
    create :graduation_plan_requirement, name: 'Service2', requirement_type: 'service', position: 2

    credit_assignments = @student2.credit_assignments.filter {|ca| ca.facilitator_approved? }

    graduation_plan = create :graduation_plan, user: @student2

    create :graduation_plan_mapping, graduation_plan: graduation_plan, graduation_plan_requirement: gradMath, credit_assignment: credit_assignments.pop
    create :graduation_plan_mapping, graduation_plan: graduation_plan, graduation_plan_requirement: gradLang1, credit_assignment: credit_assignments.pop
    create :graduation_plan_mapping, graduation_plan: graduation_plan, graduation_plan_requirement: gradLang2, credit_assignment: credit_assignments.pop
    create :graduation_plan_mapping, graduation_plan: graduation_plan, graduation_plan_requirement: gradGeneral1, notes: 'It is done', date_completed: '2019-06-15'
    create :graduation_plan_mapping, graduation_plan: graduation_plan, graduation_plan_requirement: gradService1, notes: 'It is serviced', date_completed: '2019-06-15'
  end

  describe 'write' do
    it 'all' do
      travel_to Date.new(CURRENT_YEAR, 11, 15) do
        # general
        #
        %w[contracts students staff terms settings categories profile].each do |fixture|
          write_fixture "/api/#{fixture}", "#{fixture}.js"
        end

        # general
        #
        write_fixture "/api/admin/users/#{@admin1.id}", "user-admin.js"
        write_login_fixture @admin1, "login-admin.js"
        write_fixture "/api/admin/users/#{@staff1.id}", "user-staff.js"
        write_login_fixture @staff1, "login-staff.js"
        write_fixture "/api/admin/users/#{@student1.id}", "user-student.js"

        # years
        write_fixture '/api/settings/years', 'years.js'

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

        # contract attendance roll page
        response = write_fixture "/api/meetings/#{@contract1_current.meetings.first.id}?include=meetingParticipants", 'contract-attendance-roll-meeting.js'
        write_fixture "/api/enrollments?contractIds=#{@contract1_current.id}&include=participant", 'contract-attendance-roll-enrollments.js'
        meeting_response = JSON.parse(response.body)
        meeting_participants = meeting_response['data']['relationships']['meetingParticipants']['data']
          .map{|record| record['id']}
        write_fixture "/api/notes?notableType=meetingParticipant&notableIds=#{meeting_participants.join(',')}", 'contract-attendance-roll-notes.js'

        # contract attendance list page
        write_fixture "/api/meetings?contractIds=#{@contract1_current.id}", 'contract-attendance.js'
        response = write_fixture "/api/enrollments?contractIds=#{@contract1_current.id}&include=meetingParticipants,participant", 'contract-attendance-enrollments.js'
        enrollments_response = JSON.parse(response.body)

        meeting_participants = enrollments_response['included']
          .filter{|record| record['type'] == "meetingParticipant"}
          .map{|record| record['id']}
        write_fixture "/api/notes?notableType=meetingParticipant&notableIds=#{meeting_participants.join(',')}", 'contract-attendance-notes.js'

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
        write_fixture "/api/students?coordinatorIds=#{@staff2.id}&status=reportable&order=lastName,firstName", 'coor-students.js'

        # statuses for a coordinator's students
        write_fixture "/api/statuses?studentIds=#{@staff2.coordinatees.map(&:id).join(',')}&months=#{@term_coor_current.months.join(',')}&type=student", 'coor-statuses.js'

        # all active students for all-coor summary
        write_fixture '/api/students?status=reportable&order=lastName,firstName&limit=-1', 'all-coor-students.js'

        # all active coordinators
        write_fixture '/api/staff?status=active&coordinators=true&order=lastName,firstName', 'all-coor-staff.js'

        # users from admin controller
        write_fixture '/api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname', 'admin-users.js'
        write_fixture "/api/admin/users/#{@student1.id}", 'admin-users-student-detail.js'

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
        response = write_fixture "/api/enrollments?participantIds=#{@student1.id}&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant", 'student-enrollments.js'

        # statuses for enrollments
        student_enrollments_response = JSON.parse(response.body)
        student_enrollment_ids = student_enrollments_response['data'].map{|enrollment| enrollment["id"]}
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

        # admin terms - all
        write_fixture "/api/terms?limit=20&order=name&include=usage", "admin-terms-list.js"
        write_fixture "/api/terms/#{@term1_current.id}", "admin-term-detail.js"

        # graduation plan requirements - all
        write_fixture "/api/graduation-plan-requirements", "graduation-plan-requirements-list-all.js"

        # credit assignments
        write_fixture "/api/credit-assignments?studentIds=#{@student2.id}", "student-credit-assignments.js"

        # graduation plan mappings
        write_fixture "/api/graduation-plan-mappings/#{@student2.id}", "graduation-plan-mappings.js"
      end
    end
  end
end
