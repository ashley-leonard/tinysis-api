import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import {
  availableYears,
  sortedCategories,
  sortedPeople,
} from '../utils/contract-utils';

export default Route.extend({
  tinyData: service(),

  // Just preloading data service with terms and categories
  //
  model() {
    return all([
      this.tinyData.fetch('/api/terms'),
      this.tinyData.fetch('/api/categories'),
      this.tinyData.fetch('/api/staff', {
        params: {
          status: 'active',
        },
      }),
    ]);
  },

  setupController(controller, contracts) {
    const {
      tinyData,
    } = this;

    const terms = tinyData.get('term');

    this._super(controller, contracts);

    const staff = tinyData.get('user').filter(user => /staff|admin/.test(user.attributes.role));

    controller.setProperties({
      contracts,
      schoolYears: availableYears(terms),
      categories: sortedCategories(tinyData.get('category') || []),
      facilitators: sortedPeople(staff),
    });
  },
});
