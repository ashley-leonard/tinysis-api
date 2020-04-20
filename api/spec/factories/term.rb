# frozen_string_literal: true

# spec/factories/term.rb

FactoryBot.define do
  factory :term do
    name { Faker::Lorem.sentence }
    months { %w[2018-01-01 2018-02-01 2018-03-01] }
    school_year { 2017 }
  end
end
