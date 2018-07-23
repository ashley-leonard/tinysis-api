class ContractSerializer < ApplicationSerializer
  set_type :contract
  attributes :name, :facilitator_id

  has_many :enrollments
  belongs_to :facilitator
  belongs_to :term
end
