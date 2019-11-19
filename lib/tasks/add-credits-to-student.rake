namespace :development do
  task :addCreditsToStudent, [:studentId, :adminId] => :environment do |t, args|
    puts "rake development:addCreditsToStudent[:studentId, :adminId]" and return unless args[:studentId]
    student = User.find args[:studentId]
    admin = User.find args[:adminId] || 1
    puts "updating #{student.full_name} using admin identity #{admin.full_name}"

    today = Date.today

    enrollments = Enrollment.where(participant_id: student.id, completion_status: Enrollment::COMPLETION_FULFILLED).limit(10)
    enrollments.each do |enrollment|
      credit = CreditAssignment.create enrollment: enrollment, credit: enrollment.contract.credit_assignments.first.credit, credit_hours: 0.25
      credit.enrollment_finalize(Enrollment::COMPLETION_FULFILLED, student, enrollment.contract, today)
    end
  end
end