class TermSerializer < ApplicationSerializer
  set_type :term

  attributes :name, :school_year, :active, :months, :credit_date
end
