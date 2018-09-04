class TermSerializer < ApplicationSerializer
  set_type :term

  attributes :name, :school_year, :credit_date

  attribute :months do |object|
    object.months.sort
  end

  attribute :status do |object|
    object.active ? 'active' : 'inactive'
  end

end
