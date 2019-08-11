import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  tinyData: inject(),
  model(params) {
    const {
      status,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'name',
    };

    if (status) {
      requestParams.status = status === 'all' ? 'nil' : status;
    }

    return this.tinyData.fetch('/api/admin/graduation-plan-requirements', {
      params,
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      graduationPlanRequirements: model.data,
    });
  },
});
