class ContractSerializer < ApplicationSerializer
  set_type :contract
  attributes :name
  attribute :status do |contract|
    contract.status_name.downcase
  end
  attribute :learning_objectives
  attribute :competencies
  attribute :evaluation_methods
  attribute :instructional_materials
  attribute :location
  attribute :timeslots

  has_many :enrollments

  # despite this record_type option, when I request that the
  # facilitator be included in the contract payload, I am asked to
  # define a facilitator serializer. confusing.
  #
  belongs_to :facilitator, record_type: 'User'
  belongs_to :term
  belongs_to :category

  has_many :assignments
  has_many :credit_assignments
end
