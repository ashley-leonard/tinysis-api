class MeetingParticipantsController < ApplicationController
  def create
    meeting_id = meeting_participant_meeting_id
    enrollment_id = meeting_participant_enrollment_id

    return render json: { message: 'missing meeting/enrollment relation ids' }, status: :bad_request if meeting_id.nil? or enrollment_id.nil?

    meeting_participant = MeetingParticipant.find_by_enrollment_id_and_meeting_id enrollment_id, meeting_id
    return render json: { message: 'duplicate entity' }, status: :bad_request if meeting_participant

    meeting_participant = MeetingParticipant.new meeting_participant_attributes
    meeting_participant.enrollment = Enrollment.find(enrollment_id)
    meeting_participant.meeting = Meeting.find(meeting_id)
    meeting_participant.save!

    return render json: MeetingParticipantSerializer.new(meeting_participant)
  end

  def update
    meeting_participant = MeetingParticipant.find params[:id]
    meeting_participant.update_attributes meeting_participant_attributes
    meeting_participant.save!

    return render json: MeetingParticipantSerializer.new(meeting_participant)
  end

private
  def meeting_participant_attributes
    params.require(:data)
      .require(:attributes)
      .permit(:contact_type, :participation)
  end

  def meeting_participant_enrollment_id
    params.dig :data, :relationships, :enrollment, :data, :id
  rescue
    nil
  end

  def meeting_participant_meeting_id
    params.dig :data, :relationships, :meeting, :data, :id
  rescue
    nil
  end
end