import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  async afterModel(enrollments) {
    const { tinyData } = this;
    const contractEnrollmentIds = enrollments.data.map(enrollment => enrollment.id);
    this.statuses = await tinyData.fetch(`/api/statuses?enrollmentIds=${contractEnrollmentIds}`);
  },

  setupController(controller, enrollments) {
    const contract = this.modelFor('contract');
    this._super(controller, enrollments);
    controller.setProperties({
      contract: contract.data,
      statuses: this.statuses.data,
      enrollments: enrollments.data,
    });
  },
});
