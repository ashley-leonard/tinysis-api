import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tinyData: service(),

  actions: {
    updateRoll(meetingParticipant) {
      const { tinyData } = this;
      const body = { data: meetingParticipant };

      if (meetingParticipant.id) {
        return tinyData.fetch(`/api/meeting_participants/${meetingParticipant.id}`, {
          method: 'PUT',
          body: JSON.stringify(body),
        });
      }

      return tinyData.fetch('/api/meeting_participants', {
        method: 'POST',
        body: JSON.stringify(body),
      });
    },

    updateAllRolls(contactType, participation) {
      const { meeting, tinyData } = this;
      const body = {
        data: {
          attributes: {
            contactType,
            participation,
          },
        },
      };
      return tinyData.fetch(`/api/meetings/${meeting.id}/update_roll`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
    },
  },
});
