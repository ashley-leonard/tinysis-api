import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'ul',
  classNames: ['list-reset', 'credit-assignments'],
  creditAssignmentsList: computed('creditAssignments', function () {
    const { creditAssignments } = this;

    if (Array.isArray(creditAssignments)) {
      return creditAssignments;
    }

    return [creditAssignments];
  }),
});
