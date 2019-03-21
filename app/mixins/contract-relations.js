import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Mixin.create({
  tinyData: service(),

  facilitator: computed('contract.relationships.facilitator', function () {
    const { tinyData, contract } = this;
    return tinyData.get('user', contract.relationships.facilitator.data.id);
  }),

  assignments: computed('contract.relationships.assignments', function () {
    const { tinyData, contract } = this;

    return contract.relationships.assignments.data
      .map(ref => tinyData.get('assignment', ref.id));
  }),

  meetings: computed('contract.relationships.meetings', function () {
    const { tinyData, contract } = this;

    return contract.relationships.meetings.data
      .map(ref => tinyData.get('meeting', ref.id));
  }),

  term: computed('contract', function () {
    const { contract, tinyData } = this;
    return tinyData.get('term', contract.relationships.term.data.id);
  }),

  category: computed('contract', function () {
    const { contract, tinyData } = this;
    return tinyData.get('category', contract.relationships.category.data.id);
  }),

  creditAssignments: computed('contract', function () {
    const { tinyData, contract } = this;
    return contract.relationships.creditAssignments.data.map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }),
});
