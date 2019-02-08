# spec/factories/assignment.rb

FactoryBot.define do
  factory :assignment do
    name { Faker::Lorem.sentence(5, 0) }
  end
end