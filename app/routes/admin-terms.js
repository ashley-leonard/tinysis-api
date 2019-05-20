import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  setupController(controller, model) {
    const { tinyData } = this;

    this._super(controller, model);

    const currentYear = tinyData.getSchoolYear();
    const schoolYears = tinyData.getYears();
    const nextYear = currentYear + 1;
    schoolYears.unshift(nextYear);

    controller.setProperties({
      schoolYears,
      queryParams: {},
    });
  },
});
