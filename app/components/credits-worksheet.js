import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  selectedCredits: (() => ([]))(),
  combineLinkDisabled: computed('selectedCredits', function () {
    return this.selectedCredits.length < 2;
  }),
  unfinalizedCredits: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(ca => !ca.relationships.creditTransmittalBatch.data)
      .filter(ca => !ca.relationships.parentCreditAssignment.data);
  }),
  actions: {
    approveCredit(creditAssignment) {
      this.approveCredit(creditAssignment);
    },
    combineCredits() {
      this.showCombine(this.selectedCredits);
    },
    splitCredit(creditAssignment) {
      this.splitCredit(creditAssignment);
    },
    selectCredit(creditAssignment) {
      const { selectedCredits } = this;
      if (selectedCredits.find(ca => ca === creditAssignment)) {
        this.set('selectedCredits', selectedCredits.filter(ca => ca !== creditAssignment));
      } else {
        this.set('selectedCredits', selectedCredits.concat([creditAssignment]));
      }
    },
  },
});
