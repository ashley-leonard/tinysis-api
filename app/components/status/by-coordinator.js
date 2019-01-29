import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'table',

  classNames: ['pure-table', 'pure-table-bordered'],

  months: alias('term.attributes.months'),

  statusHash: computed('statuses', function () {
    const { statuses } = this;

    return statuses.data.reduce((hash, status) => {
      const key = status.attributes.studentId.toString();

      const h = hash[key] || {};

      h[status.attributes.month] = status;
      hash[key] = h;
      return hash;
    }, {});
  }),
});
