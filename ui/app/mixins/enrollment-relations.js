import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { getEnrollmentStatusString } from '../utils/enrollment-utils';

export default Mixin.create({
  tinyData: service(),

  participant: computed('enrollment', function () {
    const { enrollment, tinyData } = this;
    return tinyData.get('user', enrollment.relationships.participant.data.id);
  }),

  creditAssignments: computed('enrollment.relationships.creditAssignments', function () {
    const { tinyData } = this;

    return this.enrollment.relationships.creditAssignments.data
      .map(ref => tinyData.get('creditAssignment', ref.id));
  }),

  turnins: computed('enrollment.relationships.turnins', function () {
    const { tinyData, enrollment } = this;
    return enrollment.relationships.turnins.data.map(turnin => tinyData.get('turnin', turnin.id));
  }),

  meetingParticipants: computed('enrollment.relationships.meetingParticipants', function () {
    const { tinyData, enrollment } = this;

    return enrollment.relationships.meetingParticipants.data
      .map(ref => tinyData.get('meetingParticipant', ref.id));
  }),

  enrollmentStatus: computed('enrollment', function () {
    return getEnrollmentStatusString(this.enrollment);
  }),
});
