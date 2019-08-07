class GraduationPlansController < ApplicationController
  def index

    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    order = (params[:order] || '')
      .split(',')
      .map(&:underscore)
      .join(',')

    result = GraduationPlanRequirement
      .order(Arel.sql(order))
      .limit(limit)

    count = GraduationPlanRequirement.count

    options = { meta: { count: count }}

    render json: GraduationPlanRequirementSerializer.new(result, options), status: 200
  end
end
