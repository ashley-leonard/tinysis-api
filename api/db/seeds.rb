# frozen_string_literal: true

require 'faker'

CURRENT_YEAR = 2019
LAST_YEAR = CURRENT_YEAR - 1

# create our new fixture settings time period
Setting.create! name: 'reporting_base_month', value: 9
Setting.create! name: 'reporting_end_month', value: 6
Setting.create! name: 'current_year', value: CURRENT_YEAR

@admin1 = User.create! privilege: User::PRIVILEGE_ADMIN, first_name: 'Jane', last_name: 'Grey', status: User::STATUS_ACTIVE, date_active: Date.new(2011, 7, 1), email: 'tinysis-devtest+jane-admin@tinysis.org'

@staff1 = User.create! privilege: User::PRIVILEGE_STAFF, first_name: 'John', last_name: 'Prescott', date_active: Date.new(2012, 9, 1), email: 'tinysis-devtest+john-staff@tinysis.org', status: User::STATUS_ACTIVE
@staff2 = User.create! privilege: User::PRIVILEGE_STAFF, first_name: 'Jake', last_name: 'Fletcher', date_active: Date.new(2013, 2, 1), email: 'tinysis-devtest+jake-staff@tinysis.org', status: User::STATUS_ACTIVE
@staff3 = User.create! privilege: User::PRIVILEGE_STAFF, first_name: 'Joan', last_name: 'McCusker', status: User::STATUS_INACTIVE, date_active: Date.new(2011, 2, 1), date_inactive: Date.new(2018, 1, 1), email: 'tinysis-devtest+joan-staff@tinysis.org'

@term1_last = Term.new name: "#{LAST_YEAR} - Term 1", school_year: LAST_YEAR, credit_date: Date.new(LAST_YEAR + 1, 1, 31)
@term2_last = Term.new name: "#{LAST_YEAR} - Term 2", school_year: LAST_YEAR, credit_date: Date.new(LAST_YEAR + 1, 6, 15)
@term1_current = Term.new name: "#{CURRENT_YEAR} - Term 1", school_year: CURRENT_YEAR, credit_date: Date.new(CURRENT_YEAR + 1, 1, 31)
@term2_current = Term.new name: "#{CURRENT_YEAR} - Term 1", school_year: CURRENT_YEAR, credit_date: Date.new(CURRENT_YEAR + 1, 6, 15)

@term1_last.set_dates(LAST_YEAR, [0, 1, 2, 3, 4])
@term2_last.set_dates(LAST_YEAR, [5, 6, 7, 8, 9])
@term1_last.save!
@term2_last.save!

@term1_current.set_dates(CURRENT_YEAR, [0, 1, 2, 3, 4])
@term2_current.set_dates(CURRENT_YEAR, [5, 6, 7, 8, 9])
@term1_current.save!
@term2_current.save!

@term_coor_last = Term.create name: "#{LAST_YEAR} COOR", active: false, school_year: LAST_YEAR
@term_coor_last.set_dates LAST_YEAR, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
@term_coor_last.save!

@term_coor_current = Term.create name: "#{CURRENT_YEAR} COOR", school_year: CURRENT_YEAR
@term_coor_current.set_dates CURRENT_YEAR, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
@term_coor_current.save!

@category1 = Category.create! name: 'Math'
@category2 = Category.create! name: 'Language Arts'

def make_contract(attributes = {})
  contract = Contract.new(
    name: Faker::Lorem.sentence(5, 0),
    contract_status: Contract::STATUS_ACTIVE,
    timeslots: [{ start: '8:45', end: '10:30', weekdays: '01234' }],
    learning_objectives: Faker::Lorem.sentence(5, 0),
    competencies: Faker::Lorem.sentence(5, 0),
    evaluation_methods: Faker::Lorem.sentence(5, 0),
    instructional_materials: Faker::Lorem.sentence(5, 0),
    location: Faker::Lorem.sentence(5, 0)
  )
  contract.update_attributes attributes
  contract.save!
  contract
end

@contract1_last = make_contract name: "#{@term1_last.name} #{@category1.name} by #{@staff1.last_name}", term: @term1_last, facilitator: @staff1, category: @category1, creator: @staff1, contract_status: Contract::STATUS_CLOSED
@contract2_last = make_contract name: "#{@term2_last.name} #{@category2.name} by #{@staff2.last_name}", term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
@contract3_last = make_contract name: "#{@term2_last.name} #{@category2.name} by #{@staff2.last_name}", term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
@contract4_last = make_contract name: "#{@term2_last.name} #{@category2.name} by #{@staff2.last_name}", term: @term2_last, facilitator: @staff2, category: @category2, creator: @staff2, contract_status: Contract::STATUS_CLOSED
@contract1_current = make_contract name: "#{@term1_current.name} #{@category1.name} by #{@staff1.last_name}", term: @term1_current, facilitator: @staff1, category: @category1, creator: @staff1
@contract2_current = make_contract name: "#{@term1_current.name} #{@category2.name} by #{@staff2.last_name}", term: @term1_current, facilitator: @staff2, category: @category2, creator: @staff2

@credit1 = Credit.create! course_name: 'Math 1'
@credit2 = Credit.create! course_name: 'Language Arts 1'

[@contract1_last, @contract1_current].each do |contract|
  CreditAssignment.create! credit: @credit1, contract: contract, credit_hours: 1
end

[@contract2_last, @contract2_current, @contract3_last, @contract4_last].each do |contract|
  CreditAssignment.create! credit: @credit2, contract: contract, credit_hours: 2
end

(1..2).each do |category_num|
  category_name = "Category #{category_num}"
  (1..2).each do |ealr_num|
    seq = "#{category_num}.#{ealr_num}"
    Ealr.create! category: category_name, seq: seq
  end
end

Ealr.all.each do |ealr|
  @contract1_current.ealrs << ealr
end
@contract1_current.save!

@student1 = User.create! privilege: User::PRIVILEGE_STUDENT, status: User::STATUS_ACTIVE, first_name: 'Riley', last_name: 'Freed', district_id: Random.rand(10**10).to_s, coordinator: @staff1, date_active: Date.new(LAST_YEAR, 8, 1)
@student2 = User.create! privilege: User::PRIVILEGE_STUDENT, status: User::STATUS_ACTIVE, first_name: 'Cary', last_name: 'Jenkins', district_id: Random.rand(10**10).to_s, coordinator: @staff2, date_active: Date.new(LAST_YEAR, 8, 1)
@student3 = User.create! privilege: User::PRIVILEGE_STUDENT, status: User::STATUS_ACTIVE, first_name: 'Janey', last_name: 'Edmunds', district_id: Random.rand(10**10).to_s, coordinator: @staff2, date_active: Date.new(LAST_YEAR, 8, 1)
@student_inactive = User.create! privilege: User::PRIVILEGE_STUDENT, status: User::STATUS_INACTIVE, first_name: 'Grey', last_name: 'Sanderson', district_id: Random.rand(10**10).to_s, coordinator: @staff2, date_active: Date.new(LAST_YEAR, 8, 1), date_inactive: Date.new(CURRENT_YEAR, 10, 1)
@students = [@student1, @student2, @student3]

# current contracts should have active enrollments. reporting as if we are three months into
# the current contracts.
[@contract1_current, @contract2_current].each do |contract|
  [@student1, @student2].each do |student|
    enrollment = Enrollment.create! participant: student, contract: contract, creator: contract.facilitator
    enrollment.set_active @admin1
    CreditAssignment.create! enrollment: enrollment, credit: @credit1, credit_hours: 1
    Note.create! note: "Note for #{student.last_name} for enrollment in #{contract.name}", notable: enrollment, creator: contract.facilitator
  end

  contract.enrollments.each do |enrollment|
    months = [contract.term.months[0], contract.term.months[1], contract.term.months[2]]
    months.each do |month|
      status = Status.create! statusable: enrollment, month: month, creator: contract.facilitator
      Note.create! creator: contract.facilitator, notable: status, note: "Note by #{contract.facilitator.last_name} for #{month} enrollment of #{enrollment.participant.last_name} in #{contract.name}"
    end
  end
end

finalized_credits = []

# closed contracts should have fulfilled enrollments and finalized credits
[@contract1_last, @contract2_last, @contract3_last].each do |contract|
  [@student2, @student3].each do |student|
    enrollment = Enrollment.create! enrollment_status: Enrollment::STATUS_ENROLLED, participant: student, contract: contract, creator: contract.facilitator
    credit1 = CreditAssignment.create! enrollment: enrollment, credit: @credit1, credit_hours: 0.25
    credit2 = CreditAssignment.create! enrollment: enrollment, credit: @credit2, credit_hours: 0.5
    credit3 = CreditAssignment.create! enrollment: enrollment, credit: @credit2, credit_hours: 0.5

    Note.create! note: "Note for #{student.last_name} for enrollment in #{contract.name}", notable: enrollment, creator: contract.facilitator

    finalized_credits.push credit1
    finalized_credits.push credit2

    enrollment.set_closed Enrollment::COMPLETION_FULFILLED, contract.facilitator
    enrollment.set_finalized @admin1
  end
end

finalized_credits.each do |credit_assignment|
  credit_assignment.district_approve @admin1, Date.new(CURRENT_YEAR, 11, 15)
end

# create a batch with just the 0.25 credits
CreditTransmittalBatch.create_batch_from_credits_list @admin1, finalized_credits.filter { |ca| ca.credit_hours == 0.25 }

# coor statuses for all months of the last coor
@term_coor_last.months.each do |month|
  @students.each do |student|
    status = Status.create! statusable: student, month: month, creator: student.coordinator
    Note.create! creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
  end
end

# coor statuses for the first two months of the current coor
months = [@term_coor_current.months[0], @term_coor_current.months[1]]
months.each do |month|
  @students.each do |student|
    status = Status.create! statusable: student, month: month, creator: student.coordinator
    Note.create! creator: student.coordinator, notable: status, note: "Note by #{student.coordinator.last_name} for #{student.last_name} on #{month}"
  end
end

# create five assignments and turnins for the contract 1 current
enrollment = @contract1_current.enrollments.find { |e| e.participant == @student1 }
(1..5).each do |assignment_number|
  assignment = Assignment.create! contract: @contract1_current, creator: @contract1_current.facilitator, name: "Assignment #{assignment_number}", description: "Here is assignment number #{assignment_number}", due_date: @term1_current.months[0] + assignment_number.days
  turnin = Turnin.create! enrollment: enrollment, assignment: assignment, status: :complete
  Note.create! notable: turnin, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{@student1.last_name} / assignment #{assignment_number}"
end

# for contract 1, define 5 meetings which are attended only by student 1
(1..5).each do |meeting_number|
  meeting = Meeting.create contract: @contract1_current, meeting_date: @contract1_current.term.months.first + meeting_number.days

  @contract1_current.enrollments.each do |enrollment|
    attendance = if enrollment.participant.id == @student1.id
                   MeetingParticipant::PRESENT
                 else
                   MeetingParticipant::ABSENT
    end

    meeting_participant = MeetingParticipant.create meeting: meeting, enrollment: enrollment, participation: attendance
    Note.create! notable: meeting_participant, creator: @contract1_current.facilitator, note: "Note by #{@contract1_current.facilitator.last_name} for student #{enrollment.participant.last_name} / meeting #{meeting_number}"
  end
end

# graduation plans requirements
gradMath = GraduationPlanRequirement.create! name: 'Math', requirement_type: 'credit', position: 1
gradLang = GraduationPlanRequirement.create! name: 'Language', requirement_type: 'credit', position: 2
gradSci = GraduationPlanRequirement.create! name: 'Science', requirement_type: 'credit', position: 3
gradLang1 = GraduationPlanRequirement.create! name: 'Language1', requirement_type: 'credit', parent: gradLang, position: 1
gradLang2 = GraduationPlanRequirement.create! name: 'Language2', requirement_type: 'credit', parent: gradLang, position: 2
gradDefunct = GraduationPlanRequirement.create! name: 'Defunct', requirement_type: 'credit', status: GraduationPlanRequirement::STATUS_INACTIVE, position: 3
gradGeneral1 = GraduationPlanRequirement.create! name: 'General1', requirement_type: 'general', position: 1
GraduationPlanRequirement.create! name: 'General2', requirement_type: 'general', position: 2
gradService1 = GraduationPlanRequirement.create! name: 'Service1', requirement_type: 'service', position: 1
GraduationPlanRequirement.create! name: 'Service2', requirement_type: 'service', position: 2

credit_assignments = @student2.credit_assignments.filter { |ca| ca.facilitator_approved? }

graduation_plan = GraduationPlan.create! user: @student2

GraduationPlanMapping.create! graduation_plan: graduation_plan, graduation_plan_requirement: gradMath, credit_assignment: credit_assignments.pop
GraduationPlanMapping.create! graduation_plan: graduation_plan, graduation_plan_requirement: gradLang1, credit_assignment: credit_assignments.pop
GraduationPlanMapping.create! graduation_plan: graduation_plan, graduation_plan_requirement: gradLang2, credit_assignment: credit_assignments.pop
GraduationPlanMapping.create! graduation_plan: graduation_plan, graduation_plan_requirement: gradGeneral1, notes: 'It is done', date_completed: '2019-06-15'
GraduationPlanMapping.create! graduation_plan: graduation_plan, graduation_plan_requirement: gradService1, notes: 'It is serviced', date_completed: '2019-06-15'
