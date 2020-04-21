import Component from '@ember/component';
import { computed } from '@ember/object';
import dayjs from 'dayjs';

export default Component.extend({
  tagName: '',
  termsList: computed('terms', function () {
    return this.terms.map(term => ({
      ...term,
      isActive: term.attributes.status === 'active',
      months: term.attributes.months
        .map(month => dayjs(month).format('MMM'))
        .join(', '),
    }));
  }),
});
