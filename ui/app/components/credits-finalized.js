import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  finalizedCredits: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter(ca => ca.relationships.creditTransmittalBatch.data);
  }),
  viewModels: computed('finalizedCredits', function () {
    const { tinyData } = this;
    return this.finalizedCredits
      .map(creditAssignment => ({
        creditAssignment,
        credit: tinyData.get('credit', creditAssignment.relationships.credit.data.id),
      }))
      .sort((vm1, vm2) => vm1.credit.attributes.courseName.localeCompare(vm2.credit.attributes.courseName));
  }),
});
