import { module, test } from 'qunit';
import EmberObject from '@ember/object';
import CreditAssignmentPropsMixin from 'tinysis-ui/mixins/credit-assignment-props';
import creditAssignmentsFixture from '../../fixtures/student-credit-assignments-with-combined';
import { buildTinyData } from '../../helpers/stub-tiny-data';

let creditAssignmentWithChildren;

module('Unit | Mixin | credit-assignment-props', (hooks) => {
  hooks.beforeEach(() => {
    creditAssignmentWithChildren = creditAssignmentsFixture.data.find(ca => ca.relationships.childCreditAssignments.data.length);
  });

  // Replace this with your real tests.
  test('it produces expected values for an approved credit with children', (assert) => {
    const CreditAssignmentPropsObject = EmberObject.extend(CreditAssignmentPropsMixin);
    const subject = CreditAssignmentPropsObject.create({
      creditAssignment: creditAssignmentWithChildren,
      tinyData: buildTinyData(),
    });

    subject.set('creditAssignment.attributes.districtFinalizeApprovedOn', new Date().toISOString());
    subject.tinyData._init();
    subject.tinyData.addResult(creditAssignmentsFixture);

    assert.ok(subject);

    ['term', 'childCreditAssignments', 'hasChildren', 'credit', 'courseName', 'creditHours', 'isApproved'].forEach((key) => {
      assert.ok(subject[key], `${key} is present as anticipated`);
    });
  });
});

/*
  term: computed('creditAssignment', function () {
    const { creditAssignment } = this;
    const term = this.tinyData.get('term', creditAssignment.relationships.contractTerm.data.id);

    return term;
  }),
  childCreditAssignments: computed('creditAssignment', function () {
    if (!this.creditAssignment.relationships.childCreditAssignments.data) return null;

    const { tinyData } = this;
    return this.creditAssignment.relationships.childCreditAssignments.data
      .map(ca => tinyData.get('creditAssignment', ca.id));
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
*/
