import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return this.tinyData.fetch(`/api/admin/users/${params.id}`);
  },

  async afterModel() {
    this.staff = await this.tinyData.fetch('/api/staff?order=lastName,firstName');
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      user: model.data,
      staff: this.staff.data,
    });
  },
});
