import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  selectedCredits: (() => ([]))(),
  creditAssignments: (() => ([]))(),
  combineLinkDisabled: computed('selectedCredits', function () {
    return this.selectedCredits.length < 2;
  }),
  unfinalizedCredits: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(ca => !ca.relationships.creditTransmittalBatch.data)
      .filter(ca => !ca.relationships.parentCreditAssignment.data);
  }),
  viewModels: computed('unfinalizedCredits', function () {
    const { tinyData } = this;
    return this.unfinalizedCredits
      .map(creditAssignment => ({
        creditAssignment,
        credit: tinyData.get('credit', creditAssignment.relationships.credit.data.id),
      }))
      .sort((vm1, vm2) => vm1.credit.attributes.courseName.localeCompare(vm2.credit.attributes.courseName));
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
