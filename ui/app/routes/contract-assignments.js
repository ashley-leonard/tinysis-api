import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model() {
    const contract = this.modelFor('contract');
    return this.tinyData.fetch(`/api/assignments?contractIds=${contract.data.id}`);
  },

  async afterModel() {
    const contract = this.modelFor('contract');
    this.enrollments = await this.tinyData.fetch(`/api/enrollments?contractIds=${contract.data.id}&include=turnins,participant`);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      contract: this.modelFor('contract').data,
      assignments: model.data,
      enrollments: this.enrollments.data,
    });
  },
});
