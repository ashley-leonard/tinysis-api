import Route from '@ember/routing/route';
import fetch from '../utils/fetch';

export default Route.extend({
  model(params) {
    return fetch(`/api/staff/${params.coordinator_id}`);
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties({
      coordinator: model.data,
    })

  }
});
