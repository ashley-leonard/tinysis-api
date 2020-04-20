# frozen_string_literal: true

class AddTimestamps < ActiveRecord::Migration[5.2]
  def change
    default_timestamp = DateTime.new(1900)
    add_timestamps :users, default: default_timestamp
    add_timestamps :categories, default: default_timestamp
    add_timestamps :contract_ealrs, default: default_timestamp
    add_timestamps :credit_transmittal_batches, default: default_timestamp
    add_timestamps :credits, default: default_timestamp
    add_timestamps :ealrs, default: default_timestamp
    add_timestamps :graduation_plan_mappings, default: default_timestamp
    add_timestamps :graduation_plan_requirements, default: default_timestamp
    add_timestamps :graduation_plans, default: default_timestamp
    add_timestamps :learning_plan_goals, default: default_timestamp
    add_timestamps :learning_plans, default: default_timestamp
    add_timestamps :learning_plans_to_goals, default: default_timestamp
    add_timestamps :meeting_participants, default: default_timestamp
    add_timestamps :meetings, default: default_timestamp
    add_timestamps :settings, default: default_timestamp
    add_column :notes, :created_at, :datetime, default: default_timestamp
    add_timestamps :terms, default: default_timestamp
  end
end
