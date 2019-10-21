class CreditAssignmentsController < ApplicationController

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    conditions = {}

    if params[:enrollmentIds]
      conditions[:enrollment_id] = params[:enrollmentIds].split(',')
    end

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    if params[:studentIds]
      conditions[:user_id] = params[:studentIds].split(',')
    end

    result = CreditAssignment
      .where(conditions)
      .includes(:credit)
      .limit(limit)
    count = CreditAssignment
      .where(conditions)
      .count

    options = {
      meta: {
        count: count,
      },
      params: {
        forFulfilled: params[:includeFulfilledAttributes] == 'true',
      }
    }

    if params[:include]
      options[:include] = params[:include].split(',').map(&:underscore)
    end

    render json: CreditAssignmentSerializer.new(result, options), status: 200
  end

  def approve
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_approve @user, approval_attributes[:district_finalize_approved_on]

    render json: CreditAssignmentSerializer.new(credit_assignment, { params: { forFulfilled: true } })
  end

  def unapprove
    credit_assignment = CreditAssignment.find params[:id]

    credit_assignment.district_unapprove

    render json: CreditAssignmentSerializer.new(credit_assignment, { params: { forFulfilled: true } })
  end

  def combine
    term_id = combine_relation(:term)
    credit_id = combine_relation(:credit)
    attributes = combine_attributes
    credit_assignment_ids = combine_relation(:child_credit_assignments)

    Rails.logger.info term_id
    Rails.logger.info credit_id
    Rails.logger.info attributes
    Rails.logger.info credit_assignment_ids

    render nothing: true
  end
  
protected
  def approval_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:district_finalize_approved_on)
  end

  def combine_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:note, :credits_override)
  end

  def combine_relation(relation)
    params.require(:data)
      .require(:relationships)
      .require(relation)
      .require(:data)
      .require(:id)
  end
end
