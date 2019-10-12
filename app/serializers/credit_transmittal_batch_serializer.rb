class CreditTransmittalBatchSerializer < ApplicationSerializer
  set_type :credit_transmittal_batch

  has_many :credit_assignments

  attributes :finalized_by, :finalized_on
end
