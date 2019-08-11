class AdminGraduationPlanRequirementsController < AdminController

  def index
    limit = params[:limit] || Rails.configuration.constants[:DEFAULT_LIMIT]

    limit = nil if limit == "-1"

    where = nil

    case params[:status]
      when 'active'
        where = { status: 'active' }
      end

    order = 'position,name'

    result = GraduationPlanRequirement
      .where(where)
      .includes(:children)
      .order(Arel.sql(order))
      .limit(limit)

    count = GraduationPlanRequirement
      .where(where)
      .count

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

  def create
    requirement = GraduationPlanRequirement.new requirements_attributes

    return unless check_assign_parent(requirement)

    requirement.save!

    render json: GraduationPlanRequirementSerializer.new(requirement)
  end

  def update
    requirement = GraduationPlanRequirement.find params[:id]

    return unless check_assign_parent(requirement)    

    requirement.update_attributes! requirements_attributes

    render json: GraduationPlanRequirementSerializer.new(requirement)
  end
  
  def sort
    requirements = []
    params[:data].each_with_index do |req, i|
      requirement = GraduationPlanRequirement.find req[:id]
      requirement.update_attributes! position: i * 10

      requirements.append requirement
    end
    render json: GraduationPlanRequirementSerializer.new(requirements)
  end

private
  def check_assign_parent requirement
    parent = requirement_parent_attributes
    if parent
      parent = GraduationPlanRequirement.find parent[:id]
      render_unprocessable_entity_response(new Error('unacceptable parent reference')) and return false unless parent and parent.parent.nil?
    end
    requirement.parent = parent
    true
  end

  def requirements_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:name, :notes, :position, :requirement_type, :status)
  end

  def requirement_parent_attributes
    params.dig(:data, :relationships, :parent, :data)
  end

end
