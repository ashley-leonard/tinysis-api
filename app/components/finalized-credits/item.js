import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  term: computed('creditAssignment', function () {
    const { creditAssignment } = this;
    const term = this.tinyData.get('term', creditAssignment.relationships.contractTerm.data.id);

    return term;
  }),
  creditAssignments: computed('creditAssignment', function () {
    return [this.creditAssignment];
  }),
});
