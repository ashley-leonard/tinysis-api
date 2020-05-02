# frozen_string_literal: true

class MeetingParticipant < ApplicationRecord
  OPTIONAL = 0
  PRESENT = 1
  ABSENT = 2
  TARDY = 3
  EXCUSED = 4

  PARTICIPATION_NAMES = {
    OPTIONAL => 'optional',
    PRESENT => 'present',
    ABSENT => 'absent',
    TARDY => 'tardy',
    EXCUSED => 'excused'
  }.freeze

  CONTACT_TYPES = %w[class coor other].freeze

  belongs_to :enrollment
  belongs_to :meeting

  has_many :notes, as: :notable, dependent: :destroy

  def privileges(user)
    meeting.privileges(user)
  end

  def participation_name
    PARTICIPATION_NAMES[participation]
  end

  def participation=(participation)
    if participation.is_a? Integer
      write_attribute(:participation, participation) && return
    end

    write_attribute :participation, case participation
                                    when PARTICIPATION_NAMES[OPTIONAL]
                                      OPTIONAL
                                    when PARTICIPATION_NAMES[PRESENT]
                                      PRESENT
                                    when PARTICIPATION_NAMES[ABSENT]
                                      ABSENT
                                    when PARTICIPATION_NAMES[TARDY]
                                      TARDY
                                    when PARTICIPATION_NAMES[EXCUSED]
                                      EXCUSED
      end
  end
end
