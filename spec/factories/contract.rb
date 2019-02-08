# spec/factories/contract.rb

FactoryBot.define do
  factory :contract do
    name { Faker::Lorem.sentence(5, 0) }
    contract_status {1}
    timeslots { [{ start: '8:45', end: '10:30', weekdays: '01234' }] }
    learning_objectives { Faker::Lorem.sentence(5, 0) }
    competencies { Faker::Lorem.sentence(5, 0) }
    evaluation_methods { Faker::Lorem.sentence(5, 0) }
    instructional_materials { Faker::Lorem.sentence(5, 0) }
    location { Faker::Lorem.sentence(5, 0) }
  end
end
