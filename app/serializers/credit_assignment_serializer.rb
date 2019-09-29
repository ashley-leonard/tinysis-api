class CreditAssignmentSerializer < ApplicationSerializer
  set_type :credit_assignment

  attributes :credit_hours

  attributes :enrollment_finalized_on,
    :contract_name,
    :contract_facilitator_name,
    :district_finalize_approved,
    :district_finalize_approved_by,
    :district_finalize_approved_on,
    :credit_transmittal_batch_id,
    :district_transmitted_on,
    :override_hours,
    :override_by,
  if: Proc.new { |record, params|
    params && params[:forFulfilled]
  }

  belongs_to :credit
  has_one :graduation_plan_mapping
  belongs_to :contract_term, record_type: :term
  belongs_to :contract_facilitator, record_type: :user
  belongs_to :contract
  belongs_to :user

  has_many :child_credit_assignments, record_type: :credit_assignment
  belongs_to :parent_credit_assignment, record_type: :credit_assignment
end
