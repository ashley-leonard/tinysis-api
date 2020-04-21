import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  creditAssignments: computed('contract', function () {
    const {
      contract,
      tinyData,
    } = this;

    return contract
      .relationships
      .creditAssignments
      .data
      .map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }),
});
