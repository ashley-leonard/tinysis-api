class NoteSerializer < ApplicationSerializer
  set_type :note

  attributes :note, :updated_at
  attribute :notable_id do |record|
    record.notable_id.to_s
  end

  belongs_to :creator, record_type: 'User'
end
