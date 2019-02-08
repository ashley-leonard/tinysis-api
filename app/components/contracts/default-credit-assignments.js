import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  classNames: ['contract-enrollments-default-credits', 'callout-box'],
  creditAssignments: computed('contract', function () {
    const { contract } = this;

    return contract
      .relationships
      .creditAssignments
      .data
      .map(creditAssignment => this.tinyData.get('creditAssignment', creditAssignment.id));
  }),
});
