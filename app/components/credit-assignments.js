import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  creditAssignmentsList: computed('creditAssignments', function () {
    const { creditAssignments } = this;

    if (!creditAssignments) return [];

    if (Array.isArray(creditAssignments)) {
      return creditAssignments;
    }

    return [creditAssignments];
  }),
});
