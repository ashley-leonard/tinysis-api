# frozen_string_literal: true

class MeetingParticipantSerializer < ApplicationSerializer
  set_type :meeting_participant

  belongs_to :meeting
  belongs_to :enrollment

  attribute :participation do |meeting_participant|
    meeting_participant.participation_name
  end

  attributes :contact_type do |meeting_participant|
    meeting_participant.contact_type.downcase
  end
end
