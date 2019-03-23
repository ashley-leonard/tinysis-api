class MeetingParticipantSerializer < ApplicationSerializer
  set_type :meeting_participant

  belongs_to :meeting
  belongs_to :enrollment

  attribute :participation do |meeting_participant|
    meeting_participant.participation_name.downcase
  end

  attributes :contact_type
end
