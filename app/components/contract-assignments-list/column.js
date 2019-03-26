import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'td',
  classNames: ['center', 'assignments-list-item-column'],
  turnin: computed('assignment', 'turninsHashedByAssignment', function () {
    const {
      turninsHashedByAssignment,
      assignment,
    } = this;

    return turninsHashedByAssignment[assignment.id];
  }),

  turninStatus: computed('turnin', function () {
    const { turnin } = this;
    return turnin ? turnin.attributes.status : 'missing';
  }),

  turninSummary: computed('turninStatus', function () {
    const { turninStatus } = this;

    if (turninStatus === 'missing') {
      return '-';
    }
    return turninStatus[0].toUpperCase();
  }),
});
