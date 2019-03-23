class MeetingSerializer < ApplicationSerializer
  set_type :meeting

  attribute :title do |meeting|
    meeting.display_title
  end

  attributes :meeting_date

  has_many :meeting_participants
end
