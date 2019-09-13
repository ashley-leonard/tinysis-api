class GraduationPlanRequirementSerializer < ApplicationSerializer
  set_type :graduation_plan_requirement

  attributes :name, :notes, :position, :requirement_type, :status

  has_many :children, record_type: 'GraduationPlanRequirement'
  belongs_to :parent, record_type: 'GraduationPlanRequirement'
end
