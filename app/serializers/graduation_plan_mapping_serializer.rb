class GraduationPlanMappingSerializer < ApplicationSerializer
  set_type :graduation_plan_mapping

  attribute :date_completed
  attribute :notes do |object|
    object.name
  end

  belongs_to :student, object_method_name: :student, record_type: :user
  belongs_to :graduation_plan_requirement
  belongs_to :credit_assignment
end
