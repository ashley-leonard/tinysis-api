# frozen_string_literal: true

# spec/factories/setting.rb

FactoryBot.define do
  factory :setting do
    name { Faker::Lorem.word }
    value { 1 }
  end
end
