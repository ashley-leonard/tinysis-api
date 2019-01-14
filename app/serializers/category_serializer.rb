class CategorySerializer < ApplicationSerializer
  set_type :category

  attributes :name, :sequence, :public

  attribute :homeroom do |record|
    record.homeroom?
  end

  attribute :statusable do |record|
    record.statusable?
  end
end
