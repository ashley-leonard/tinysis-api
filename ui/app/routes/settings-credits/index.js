import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  queryParams: {
    search: {
      refreshModel: true,
    },
    status: {
      refreshModel: true,
    },
    courseType: {
      refreshModel: true,
    },
  },
  model(params) {
    this.qp = params;
    return this.tinyData.fetch(`/api/credits?search=${params.search}&status=${params.status}&order=courseName,courseType`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.controllerFor('settings-credits').set('qp', this.qp);
    controller.set('credits', model.data);
  },
});
