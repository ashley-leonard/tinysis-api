# spec/factories/credit_transmittal_batch.rb

FactoryBot.define do
  factory :credit_transmittal_batch do
    finalized_by { Faker.Name.first_name Faker.name.last_name }
    finalized_at { Date.new }
  end
end
