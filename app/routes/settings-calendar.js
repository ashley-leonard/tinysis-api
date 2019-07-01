import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  model() {
    return this.tinyData.get('setting');
  },
  async afterModel() {
    const { tinyData } = this;
    const terms = await tinyData.fetch('/api/terms?active=true&order=name');
    this.terms = terms;
  },
  setupController(controller, settings) {
    this._super(controller, settings);
    controller.setProperties({
      terms: this.terms.data,
      currentYear: (new Date()).getFullYear(),
      settings,
    });
  },
});
