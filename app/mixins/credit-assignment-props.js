import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { getCourseName, getHours } from '../utils/credit-utils';

export default Mixin.create({
  term: computed('creditAssignment', function () {
    const { creditAssignment } = this;
    const term = this.tinyData.get('term', creditAssignment.relationships.contractTerm.data.id);

    return term;
  }),
  childCreditAssignments: computed('creditAssignment', function () {
    return this.creditAssignment.relationships.childCreditAssignments.data;
  }),
  hasChildren: computed('creditAssignment', function () {
    return this.creditAssignment.relationships.childCreditAssignments.data && this.creditAssignment.relationships.childCreditAssignments.data.length > 0;
  }),
  credit: computed('creditAssignment', function () {
    return this.tinyData.get('credit', this.creditAssignment.relationships.credit.data.id);
  }),
  courseName: computed('creditAssignment', 'credit', function () {
    const { creditAssignment, credit } = this;
    return getCourseName(creditAssignment, credit);
  }),
  creditHours: computed('creditAssignment', function () {
    return getHours(this.creditAssignment);
  }),
  isApproved: computed('creditAssignment', function () {
    return Boolean(this.creditAssignment.attributes.districtFinalizeApprovedOn);
  }),
});
