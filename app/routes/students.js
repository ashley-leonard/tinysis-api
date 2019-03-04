import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Route.extend({
  tinyData: service(),
  model() {
    return all([
      this.tinyData.fetch('/api/staff?order=lastName,firstName&coordinators=true'),
    ]);
  },
  setupController(controller, model) {
    this._super(controller, model);
    const [staff] = model;
    controller.setProperties({
      staff: staff.data,
      schoolYears: this.tinyData.getYears().sort((y1, y2) => (y2 - y1)),
      queryParams: {},
    });
  },
});
