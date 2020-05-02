# frozen_string_literal: true

class Turnin < ApplicationRecord
  STATUS_TYPES = %w[missing incomplete complete late exceptional].freeze

  has_many :notes, as: :notable, dependent: :destroy
  belongs_to :enrollment
  belongs_to :assignment

  validates_inclusion_of :status, in: STATUS_TYPES

  # Return a hash describing privileges of the specified user
  # on this turnin

  def privileges(user)
    enrollment.privileges(user)
  end

  def missing?
    status == :missing
  end

  def complete?
    %i[complete exceptional late].include? status
  end

  def incomplete?
    status == :incomplete
  end

  def scode
    attributes['scode'] || status.to_s[0, 1].upcase
  end

  # This attribute is pulled in select queries. Return TRUE if the attribute
  # indicates "1"
  def has_note?
    attributes['has_note'] ? attributes['has_note'] == '1' : !notes.empty?
  end
end
