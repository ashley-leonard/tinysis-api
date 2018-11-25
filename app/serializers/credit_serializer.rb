class CreditSerializer < ApplicationSerializer
  set_type :credit

  attributes :course_id, :course_name, :course_type
end
