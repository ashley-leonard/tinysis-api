import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { generateNotableHash } from '../utils/note-utils';
import {
  PARTICIPATION_ABSENT,
  PARTICIPATION_TARDY,
  PARTICIPATION_PRESENT,
  PARTICIPATION_EXCUSED,
} from '../utils/meeting-utils';
import ContractRelations from '../mixins/contract-relations';
import Notes from '../mixins/notes';
import clone from '../utils/clone';

export default Component.extend(ContractRelations, Notes, {
  tinyData: service(),
  tagName: '',

  sortedMeetings: computed('meetings', function () {
    const { meetings } = this;
    return meetings
      .sort((a1, a2) => a1.attributes.meetingDate.localeCompare(a2.attributes.meetingDate));
  }),

  notesHash: computed('notes', function () {
    const {
      notes,
      meetingParticipants,
    } = this;

    if (!notes) return {};

    return generateNotableHash(notes, meetingParticipants, 'relationships.enrollment.data.id');
  }),

  meetingParticipants: computed('enrollments', function () {
    return this.enrollments
      .map(enrollment => enrollment.relationships.meetingParticipants.data)
      .flatten()
      .map(relation => this.tinyData.get('meetingParticipant', relation.id));
  }),

  attendanceHash: computed('meetingParticipants', 'enrollments', function () {
    const {
      enrollments,
      meetingParticipants,
      meetings,
    } = this;

    const rollTemplate = {
      participationByMeeting: {},
      present: 0,
      absent: 0,
      excused: 0,
      tardy: 0,
    };

    const hashed = meetingParticipants.reduce((memo, meetingParticipant) => {
      const enrollmentId = meetingParticipant.relationships.enrollment.data.id;
      const roll = memo[enrollmentId] || clone(rollTemplate);

      roll.participationByMeeting[meetingParticipant.relationships.meeting.data.id] = meetingParticipant;

      switch (meetingParticipant.attributes.participation) {
        case PARTICIPATION_PRESENT:
          roll.present += 1;
          break;

        case PARTICIPATION_ABSENT:
          roll.absent += 1;
          break;

        case PARTICIPATION_EXCUSED:
          roll.excused += 1;
          break;

        case PARTICIPATION_TARDY:
          roll.tardy += 1;
          break;

        default:
          break;
      }

      memo[enrollmentId] = roll;

      return memo;
    }, {});

    const meetingCount = meetings.length;
    enrollments.forEach((enrollment) => {
      const roll = hashed[enrollment.id] || clone(rollTemplate);
      const sum = roll.absent + roll.present + roll.excused + roll.tardy;
      const difference = meetingCount - sum;

      roll.absent += difference;

      hashed[enrollment.id] = roll;
    });

    return hashed;
  }),

  async didReceiveAttrs() {
    const notes = await this.getNotes(this.meetingParticipants);
    if (!this.isDestroyed) this.set('notes', notes);
  },
});
