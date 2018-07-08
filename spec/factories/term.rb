# spec/factories/term.rb

FactoryBot.define do
  factory :term do
    name { Faker::Lorem.sentence }
    months { [ '2018-01-01', '2018-02-01', '2018-03-01' ]}
  end
end