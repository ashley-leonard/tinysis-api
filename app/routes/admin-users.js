import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model() {
    return this.tinyData.fetch('/api/admin/users?order=lastName,firstName');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      staff: model.data,
      schoolYears: this.tinyData.getYears(),
      logins: this.logins,
    });
  },
});
