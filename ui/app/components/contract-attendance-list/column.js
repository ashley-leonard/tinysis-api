import Component from '@ember/component';
import { computed } from '@ember/object';
import { attendanceDisplay } from '../../utils/meeting-utils';

export default Component.extend({
  tagName: '',
  meetingParticipant: computed('roll', 'meeting', function () {
    const { roll, meeting } = this;
    return roll.participationByMeeting[meeting.id];
  }),
  display: computed('meetingParticipant', function () {
    const { meetingParticipant } = this;

    return attendanceDisplay(meetingParticipant);
  }),
});
