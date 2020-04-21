import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  setupController(controller, contract) {
    this._super(controller, contract);

    controller.setProperties({
      contract: contract.data,
    });
  },
});
