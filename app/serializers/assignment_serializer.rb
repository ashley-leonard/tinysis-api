class AssignmentSerializer < ApplicationSerializer
  set_type :assignment

  attributes :name, :description, :due_date
end
