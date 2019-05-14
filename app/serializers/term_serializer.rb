class TermSerializer < ApplicationSerializer
  set_type :term

  attributes :name, :school_year, :credit_date

  attribute :months do |object|
    object.months.sort
  end

  attribute :status do |object|
    object.active ? 'active' : 'inactive'
  end

  meta do |term, params|
    if params[:usage]
      term_entry = params[:usage].find{|meta| meta[:id] == term.id}
      term_entry.attributes.reject{|a| a == "id"}
    end
  end
end
