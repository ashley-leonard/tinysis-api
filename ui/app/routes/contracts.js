import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import fetch from 'fetch';
import {
  sortedCategories,
  sortedPeople,
} from '../utils/contract-utils';

export default Route.extend({
  tinyData: service(),

  // Just preloading data service with terms and categories
  //
  model() {
    return all([
      fetch('/api/settings/years').then(r => r.json()),
      this.tinyData.fetch('/api/categories'),
      this.tinyData.fetch('/api/staff', {
        data: {
          status: 'active',
        },
        limit: -1,
      }),
    ]);
  },

  setupController(controller, result) {
    const [
      schoolYears,
      categories,
      staff,
    ] = result;

    this._super(controller, result);

    controller.setProperties({
      schoolYears: schoolYears.sort((y1, y2) => y2 - y1),
      categories: sortedCategories(categories.data),
      facilitators: sortedPeople(staff.data),
    });
  },
});
