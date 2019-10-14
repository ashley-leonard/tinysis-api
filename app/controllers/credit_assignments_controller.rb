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
  
protected
  def approval_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:district_finalize_approved_on)
  end
end
