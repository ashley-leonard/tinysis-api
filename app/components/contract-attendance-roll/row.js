import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import { bool } from '@ember/object/computed';
import {
  participationOptions,
  contactTypeOptions,
  participationByKey,
  CONTACT_TYPE_CLASS,
} from '../../utils/meeting-utils';
import clone from '../../utils/clone';
import { createEntity } from '../../utils/json-api';

export default Component.extend({
  tinyData: service(),

  tagName: '',
  participationOptions,
  contactTypeOptions,

  notesHash: computed(() => ({})),

  hasRoll: bool('meetingParticipant.id'),

  meetingParticipant: computed('meetingParticipantHash', 'enrollment', function () {
    const {
      meetingParticipantHash,
      enrollment,
    } = this;

    const matchedRecord = meetingParticipantHash[enrollment.id];

    if (matchedRecord) return clone(matchedRecord);

    const attributes = { participationType: CONTACT_TYPE_CLASS };
    const newMeetingParticipant = createEntity('meetingParticipant', attributes, this.meeting, this.enrollment);
    return newMeetingParticipant;
  }),

  notes: computed('notesHash', 'enrollment', function () {
    return this.notesHash[this.enrollment.id];
  }),

  didReceiveAttrs() {
    let { meetingParticipant } = this;
    meetingParticipant = meetingParticipant || { attributes: {} };
    this.setProperties({
      participation: meetingParticipant.attributes.participation,
      meetingType: meetingParticipant.attributes.meetingType,
    });
  },

  actions: {
    setMeetingType(meetingType) {
      this.set('meetingParticipant.attributes.contactType', meetingType);
      this.scheduleUpdateRoll();
    },

    setParticipation(participation) {
      this.set('meetingParticipant.attributes.participation', participation);
      this.scheduleUpdateRoll();
    },

    setParticipationByKey(current, key) {
      let participation;
      if (key === ' ') {
        participation = current;
      } else {
        participation = participationByKey(key);
      }

      if (participation) {
        this.set('meetingParticipant.attributes.participation', participation);
        this.scheduleUpdateRoll();
      }
    },
  },

  scheduleUpdateRoll() {
    debounce(this, this.doUpdateRoll, 1000);
  },

  async doUpdateRoll() {
    const {
      meetingParticipant,
      updateRoll,
    } = this;

    const result = await updateRoll(meetingParticipant);

    this.set('meetingParticipant', clone(result.data));
  },
});
