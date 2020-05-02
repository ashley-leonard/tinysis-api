# frozen_string_literal: true

class AssignmentsController < ApiBaseController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == '-1'

    conditions = {}

    if params[:contractIds]
      conditions[:contract_id] = params[:contractIds].split(',')
    end

    result = Assignment
             .where(conditions)
             .limit(limit)

    count = Assignment.where(conditions).count

    options = {
      meta: {
        count: count
      },
      includes: [:turnins]
    }

    render json: AssignmentSerializer.new(result, options), status: 200
  end
end
