# frozen_string_literal: true

class UserSerializer < ApplicationSerializer
  attributes :first_name
  attributes :last_name
  attributes :nickname
  attributes :date_active
  attributes :date_inactive
  attributes :district_id
  attributes :district_grade
  attributes :email

  attribute :status do |object|
    case object.status
    when User::STATUS_ACTIVE
      'active'
    when User::STATUS_INACTIVE
      'inactive'
    else
      'inactive'
    end
  end

  attribute :role do |object|
    User::PRIVILEGE_NAMES[object.privilege].downcase
  end

  has_many :coordinatees, record_type: :user, if: proc { |record| record.staff? }
  belongs_to :coordinator, record_type: :user, if: proc { |record| record.student? }
end
