import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: 'tbody',
  enrollmentStatus: alias('enrollment.attributes.enrollmentStatus'),
  contract: computed('enrollment', function () {
    return this.tinyData.get('contract', this.enrollment.relationships.contract.data.id);
  }),
  facilitator: computed('contract', function () {
    return this.tinyData.get('user', this.contract.relationships.facilitator.data.id);
  }),
  creditAssignments: computed('enrollment', function () {
    const { tinyData } = this;
    return this.enrollment.relationships.creditAssignments.data.map(creditAssignment => tinyData.get('creditAssignment', creditAssignment.id));
  }),
  term: computed('contract', function () {
    return this.tinyData.get('term', this.contract.relationships.term.data.id);
  }),
  notes: computed('notablesHash', function () {
    const { notablesHash, enrollment } = this;

    if (!(notablesHash && enrollment)) return null;

    return notablesHash[enrollment.id];
  }),
  columnsCount: computed('months', function () {
    return this.months.length + 2;
  }),
});
