# spec/factories/graduation_plan_mapping.rb

FactoryBot.define do
  factory :graduation_plan_mapping do
    notes { Faker::Lorem.paragraphs.join('\n\n') }
  end
end
