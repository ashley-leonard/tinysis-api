import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  unfinalizedCredits: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(ca => ca.attributes.districtFinalizeApproved === false);
  }),
});
