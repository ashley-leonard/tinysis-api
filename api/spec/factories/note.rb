# frozen_string_literal: true

# spec/factories/note.rb

FactoryBot.define do
  factory :note do
    note { Faker::Lorem.sentence }
  end
end
