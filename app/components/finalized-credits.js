import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  finalizedCreditAssignments: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(ca => ca.attributes.districtFinalizeApproved === true);
  }),
});
