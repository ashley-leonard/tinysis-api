import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model(params) {
    return this.tinyData.get('category', params.id);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('category', model);
  },
});
