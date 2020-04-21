import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return this.tinyData.fetch(`/api/meetings/${params.meeting_id}?include=meetingParticipants`);
  },

  afterModel() {
    const contract = this.modelFor('contract');

    return this.tinyData.fetch(`/api/enrollments?contractIds=${contract.data.id}&include=participant`);
  },

  setupController(controller, meeting) {
    const contract = this.modelFor('contract');

    this._super(controller, meeting);

    controller.setProperties({
      contract: contract.data,
      meeting: meeting.data,
    });
  },
});
