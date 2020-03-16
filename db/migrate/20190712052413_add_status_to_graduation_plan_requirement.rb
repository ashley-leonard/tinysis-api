# frozen_string_literal: true

class AddStatusToGraduationPlanRequirement < ActiveRecord::Migration[5.2]
  def change
    add_column :graduation_plan_requirements, :status, :string, default: GraduationPlanRequirement::STATUS_ACTIVE
  end
end
