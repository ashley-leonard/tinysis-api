# frozen_string_literal: true

# spec/factories/ealr.rb

FactoryBot.define do
  factory :ealr do
    ealr { Faker::Lorem.sentence(5, 0) }
  end
end
