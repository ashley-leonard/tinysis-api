import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  noResultsMessage: 'No results were found',
  count: 0,
  hasResults: computed('count', function () {
    return this.count > 0;
  }),
});
