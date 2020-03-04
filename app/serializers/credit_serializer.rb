# frozen_string_literal: true

class CreditSerializer < ApplicationSerializer
  set_type :credit

  attributes :course_id, :course_name, :status
  attribute :course_type do |object|
    object.course_type_string
  end
end
