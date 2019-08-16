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

  def update
    if mapping_id
      mapping = GraduationPlanMapping.find_by_id_and_graduation_plan_id @graduation_plan.id, mapping_id
    else
      mapping = GraduationPlanMapping.new
    end

    ca_id = credit_assignment_id
    gpr_id = graduation_plan_requirement_id

    credit_assignment_id = relations[:credit_assignment][:data][:id]

    mapping.credit_assignment = CreditAssignment.find_by_user_id_and_id(@graduation_plan.user_id, credit_assignment_id)
    mapping.graduation_plan = @graduation_plan
    mapping.graduation_plan_requirement = GraduationPlanRequirement.find graduation_plan_requirement_id

    mapping.save!

    render json: GraduationPlanMappingSerializer.new(mapping)
  end

  def delete
    mapping = GraduationPlanMapping.find_by_id_and_graduation_plan_id params[:mapping_id], @graduation_plan.id
    mapping.destroy!

    render nothing: true, status: 204
  end

private
  def get_graduation_plan
    @graduation_plan = GraduationPlan.find_by_user_id(params[:student_id]) ||
      GraduationPlan.create!(user_id: params[:student_id])
  end

  def mapping_id
    params.require(:data)
      .permit(:id)
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

end
