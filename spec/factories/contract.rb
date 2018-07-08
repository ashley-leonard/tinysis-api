# spec/factories/contract.rb

FactoryBot.define do
  factory :contract do
    name { Faker::Lorem.sentence(5, 0) }
    contract_status 1
  end
end