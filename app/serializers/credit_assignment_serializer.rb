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
    :contract_term_id,
    :contract_facilitator_id,
    :district_transmitted_on,
    :override_hours,
    :override_by,
    :user_id,
    :contract_id,
  if: Proc.new { |record, params|
    params && params[:forFulfilled]
  }

  belongs_to :credit
  has_one :graduation_plan_mapping
end
