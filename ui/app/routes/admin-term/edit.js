import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model(params) {
    return this.tinyData.fetch(`/api/terms/${params.id}`);
  },
  setupController(controller, model) {
    const { tinyData } = this;
    this._super(controller, model);
    const schoolYears = tinyData.getYears();
    const schoolYear = tinyData.getSchoolYear();
    const nextYear = schoolYear + 1;
    const reportingBaseMonth = tinyData.getReportingBaseMonth();

    if (!schoolYears.includes(nextYear)) {
      schoolYears.push(nextYear);
    }
    schoolYears.sort((a, b) => b - a);

    controller.setProperties({
      term: model.data,
      schoolYears,
      reportingBaseMonth,
    });
  },
});
