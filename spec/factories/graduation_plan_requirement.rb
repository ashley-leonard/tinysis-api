# frozen_string_literal: true

# spec/factories/graduation_plan_requirement.rb

FactoryBot.define do
  factory :graduation_plan_requirement do
    notes { Faker::Lorem.paragraphs.join('\n\n') }
    requirement_type { 'credit' }
  end
end
