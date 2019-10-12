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

end
