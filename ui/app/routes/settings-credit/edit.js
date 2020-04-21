import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model(params) {
    return this.tinyData.fetch(`/api/credits/${params.id}`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('credit', model.data);
  },
});
