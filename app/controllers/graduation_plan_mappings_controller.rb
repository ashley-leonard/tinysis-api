class GraduationPlanMappingsController < ApplicationController
  before_action :get_graduation_plan

  def index
    mappings = GraduationPlanMapping.where(graduation_plan: @graduation_plan)
    options = {
      include: [:graduation_plan_requirement, :credit_assignment],
      meta: {
        count: mappings.length
      }
    }
    render json: GraduationPlanMappingSerializer.new(mappings, options)
  end

  def create
    mapping = GraduationPlanMapping.new graduation_plan_attributes

    if credit_assignment_id
      mapping.credit_assignment = CreditAssignment.find_by_id_and_user_id(credit_assignment_id, @graduation_plan.user_id)
    end

    mapping.graduation_plan = @graduation_plan
    mapping.graduation_plan_requirement = GraduationPlanRequirement.find_by_id_and_status graduation_plan_requirement_id, 'active'

    if mapping.credit_assignment && GraduationPlanMapping.find_by_graduation_plan_id_and_credit_assignment_id(@graduation_plan.id, mapping.credit_assignment_id)
      render json: { message: 'Duplicate mapping' }, status: 422 and return
    end

    mapping.save!

    render json: GraduationPlanMappingSerializer.new(mapping)
  end

  def update
    mapping = GraduationPlanMapping.find_by_id_and_graduation_plan_id params[:id], @graduation_plan.id

    if credit_assignment_id
      mapping.credit_assignment = CreditAssignment.find_by_id_and_user_id(credit_assignment_id, @graduation_plan.user_id)
    end

    mapping.graduation_plan = @graduation_plan
    mapping.graduation_plan_requirement = GraduationPlanRequirement.find_by_id_and_status graduation_plan_requirement_id, 'active'

    if mapping.credit_assignment && GraduationPlanMapping.find_by_graduation_plan_id_and_credit_assignment_id(@graduation_plan.id, mapping.credit_assignment_id)
      render json: { message: 'Duplicate mapping' }, status: 422 and return
    end

    mapping.save!

    render json: GraduationPlanMappingSerializer.new(mapping)
  end

  def destroy
    mapping = GraduationPlanMapping.find_by_id_and_graduation_plan_id params[:mapping_id], @graduation_plan.id
    raise ActiveRecord::RecordNotFound.new if mapping.nil?

    mapping.destroy!

    render nothing: true, status: 204
  end

private
  def get_graduation_plan
    @graduation_plan = GraduationPlan.find_by_user_id(params[:student_id])
    
    return @graduation_plan if @graduation_plan
    
    user = User.find params[:student_id]
    
    @graduation_plan = GraduationPlan.create!(user: user)
  end

  def mapping_id
    params.require(:data)
      .dig(:id)
  end

  def credit_assignment_id
    params.require(:data)
      .require(:relationships)
      .dig(:credit_assignment, :data, :id)
  end

  def graduation_plan_requirement_id
    params.require(:data)
      .require(:relationships)
      .dig(:graduation_plan_requirement, :data, :id)
  end

  def graduation_plan_attributes
    params.require(:data)
      .permit(attributes: [ :notes, :date_completed ])
  end
end
