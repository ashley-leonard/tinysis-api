# frozen_string_literal: true

# spec/factories/credit.rb

FactoryBot.define do
  factory :credit do
    course_name { Faker::Lorem.sentence(2, 0) }
  end
end
