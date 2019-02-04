import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: inject(),

  classNames: ['contract-detail'],

  term: computed('contract', function () {
    const { contract, tinyData } = this;
    return tinyData.get('term', contract.relationships.term.data.id);
  }),

  facilitator: computed('contract', function () {
    const { contract, tinyData } = this;
    return tinyData.get('user', contract.relationships.facilitator.data.id);
  }),

  category: computed('contract', function () {
    const { contract, tinyData } = this;
    return tinyData.get('category', contract.relationships.category.data.id);
  }),

  creditAssignments: computed('contract', function () {
    const { tinyData, contract } = this;
    return contract.relationships.creditAssignments.data.map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }),

  assignments: computed('contract', function () {
    const { tinyData, contract } = this;
    return contract.relationships.assignments.data.map(assignment => tinyData.get('assignment', assignment.id));
  }),
});
