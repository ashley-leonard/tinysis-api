import Component from '@ember/component';
import { computed } from '@ember/object';
import ContractRelations from '../../mixins/contract-relations';
import EnrollmentRelations from '../../mixins/enrollment-relations';
import {
  PARTICIPATION_PRESENT,
} from '../../utils/meeting-utils';

export default Component.extend(ContractRelations, EnrollmentRelations, {
  tagName: 'dl',

  completedAssignments: computed('turnins', function () {
    const { turnins } = this;
    return turnins
      .filter(turnin => turnin.attributes.status === 'complete');
  }),

  attendedMeetings: computed('meetingParticipants', function () {
    const { meetingParticipants } = this;
    return meetingParticipants
      .filter(meetingParticipant => meetingParticipant.attributes.participation === PARTICIPATION_PRESENT);
  }),
});
