import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { createEntity } from '../../utils/json-api';

export default Controller.extend({
  tinyData: service(),
  today: computed(() => new Date()),
  actions: {
    toggleNew() {
      this.toggleProperty('showNew');
    },
    async createMeeting(meetingDate) {
      const { tinyData, contract } = this;
      const newMeeting = createEntity('meeting', { meetingDate }, contract);

      const result = await tinyData.fetch('/api/meetings', {
        method: 'POST',
        data: { data: newMeeting },
      });
      this.transitionToRoute('contract-attendance-roll', result.data.id);
    },
  },
});
