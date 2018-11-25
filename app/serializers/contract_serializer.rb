class ContractSerializer < ApplicationSerializer
  set_type :contract
  attributes :name

  has_many :enrollments

  # despite this record_type option, when I request that the
  # facilitator be included in the contract payload, I am asked to
  # define a facilitator serializer. confusing.
  #
  belongs_to :facilitator, record_type: 'User'
  belongs_to :term
end
