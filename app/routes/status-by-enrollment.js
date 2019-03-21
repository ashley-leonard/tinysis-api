import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return this.tinyData.fetch(`/api/enrollments/${params.enrollment_id}?include=participant,turnins,meetingParticipants,creditAssignments,creditAssignments.credit`);
  },

  async afterModel(enrollmentResult) {
    this.statuses = await this.tinyData.fetch(`/api/statuses?enrollmentIds=${enrollmentResult.data.id}`);
  },

  setupController(controller, enrollmentResult) {
    this._super(controller, enrollmentResult);
    controller.setProperties({
      enrollment: enrollmentResult.data,
      contract: this.modelFor('contract').data,
      statuses: this.statuses.data,
    });
  },
});
