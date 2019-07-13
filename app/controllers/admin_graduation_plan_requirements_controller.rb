class AdminGraduationPlanRequirementsController < AdminController

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    status = params[:status] || 'active'
    status_params = case status
      when 'active'
        status
      when 'all'
        nil
      end

    order = (params[:order] || '')
      .split(',')
      .map(&:underscore)
      .join(',')

    result = GraduationPlanRequirement
      .where(status: status)
      .order(Arel.sql(order))
      .limit(limit)

    count = GraduationPlanRequirement
      .where(status: status)
      .count

    options = { meta: { count: count }}

    render json: GraduationPlanRequirementSerializer.new(result, options), status: 200
  end

  def create
    requirement = GraduationPlanRequirement.new requirements_attributes
    requirement.save!

    render json: GraduationPlanRequirementSerializer.new(requirement)
  end

  def update
    requirement = GraduationPlanRequirement.find params[:id]

    requirement.update_attributes! requirements_attributes

    render json: GraduationPlanRequirementSerializer.new(requirement)
  end

private

  def requirements_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:name, :notes, :position, :requirement_type, :reporting)
  end

end
