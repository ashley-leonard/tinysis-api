# spec/factories/status.rb

FactoryBot.define do
  factory :status do
    academic_status 0
    attendance_status 0
    held_periodic_checkins true
  end
end