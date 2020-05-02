import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import ContractRelations from '../mixins/contract-relations';
import Notes from '../mixins/notes';
import { generateNotableHash } from '../utils/note-utils';
import clone from '../utils/clone';

export default Component.extend(ContractRelations, Notes, {
  tinyData: service(),
  tagName: 't-contract-attendance-roll',

  meetingParticipants: computed('meeting', function () {
    const { tinyData, meeting } = this;
    return meeting.relationships.meetingParticipants.data
      .map(relation => tinyData.get('meetingParticipant', relation.id));
  }),

  meetingParticipantHash: computed('meetingParticipants', function () {
    const { tinyData, meetingParticipants } = this;
    return meetingParticipants
      .reduce((memo, relation) => {
        const meetingParticipant = tinyData.get('meetingParticipant', relation.id);
        memo[meetingParticipant.relationships.enrollment.data.id] = meetingParticipant;
        return memo;
      }, {});
  }),

  notesHash: computed('notes', function () {
    const {
      notes,
      meetingParticipants,
    } = this;

    if (!notes) return {};

    return generateNotableHash(notes, meetingParticipants, 'relationships.enrollment.data.id');
  }),

  async didReceiveAttrs() {
    const notes = await this.getNotes(this.meetingParticipants);
    if (!this.isDestroyed) this.set('notes', notes);
  },

  actions: {
    async updateAllRolls(contactType, participation) {
      const result = await this.updateAllRolls(contactType, participation);

      this.set('meetingParticipants', clone(result.data));
    },
  },
});
