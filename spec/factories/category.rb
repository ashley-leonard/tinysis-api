# frozen_string_literal: true

# spec/factories/category.rb

FactoryBot.define do
  factory :category do
    name { Faker::Lorem.sentence(5, 0) }
  end
end
