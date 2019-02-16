class AssignmentSerializer < ApplicationSerializer
  set_type :assignment

  attributes :name, :description, :due_date

  has_many :turnins
end
