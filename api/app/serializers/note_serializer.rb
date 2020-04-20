# frozen_string_literal: true

class NoteSerializer < ApplicationSerializer
  set_type :note

  attributes :note, :updated_at

  belongs_to :notable, polymorphic: true
  belongs_to :creator, record_type: 'User'
end
