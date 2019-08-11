import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  beforeModel() {
    return this.tinyData.fetch('/api/admin/graduation-plan-requirements?status=active');
  },
  model(params) {
    return this.tinyData.fetch(`/api/admin/graduation-plan-requirements/${params.id}`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      graduationPlanRequirements: this.tinyData.get('graduationPlanRequirement'),
      requirement: model.data,
    });
  },
});
