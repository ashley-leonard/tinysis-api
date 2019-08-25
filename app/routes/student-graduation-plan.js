import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  async beforeModel() {
    this.requirements = await this.tinyData.fetch('/api/graduation-plan-requirements?status=active');
  },
  model(params, transition) {
    const { student } = transition.data;
    this.student = student;
    return this.tinyData.fetch(`/api/graduation-plan-mappings/${student.id}`);
  },
  async afterModel(params, transition) {
    this.creditAssignments = await this.tinyData.fetch(`/api/credit-assignments?studentIds=${transition.data.student.id}&includeFulfilledAttributes=true`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      student: this.student,
      creditAssignments: this.creditAssignments.data,
      requirements: this.requirements.data,
      mappings: model.data,
    });
  },
});
