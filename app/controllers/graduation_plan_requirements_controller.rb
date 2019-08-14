class GraduationPlanRequirementsController < ApplicationController
  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = 'position,name'

    result = GraduationPlanRequirement
      .includes(:children)
      .order(Arel.sql(order))
      .limit(limit)

    count = GraduationPlanRequirement.count

    options = {
      meta: {
        count: count,
        params: {
          status: params[:status]
        }
      }
    }

    render json: GraduationPlanRequirementSerializer.new(result, options), status: 200
  end

  def show
    requirement = GraduationPlanRequirement.find params[:id]
    
    render json: GraduationPlanRequirementSerializer.new(requirement)
  end
end
