import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model(params) {
    return this.tinyData.fetch(`/api/contracts/${params.id}?include=category,facilitator,assignments,meetings,creditAssignments,creditAssignments.credit,term,ealrs`);
  },
  setupController(controller, contract) {
    this._super(controller, contract);
    controller.setProperties({
      contract: contract.data,
    });
  },
});
