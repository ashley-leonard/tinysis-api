import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  unassignedCredits: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(creditAssignment => !get(creditAssignment, 'relationships.graduationPlanMapping.data'));
  }),
});
