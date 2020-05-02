# frozen_string_literal: true

class AdminGraduationPlanRequirementsController < AdminController
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

  def check_assign_parent(requirement)
    parent = requirement_parent_attributes
    if parent
      parent = GraduationPlanRequirement.find parent[:id]
      unless parent && parent.parent.nil?
        render_unprocessable_entity_response(new(Error('unacceptable parent reference'))) && (return false)
      end
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
