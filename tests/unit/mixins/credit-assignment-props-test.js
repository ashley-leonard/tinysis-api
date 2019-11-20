import EmberObject from '@ember/object';
import CreditAssignmentPropsMixin from 'tinysis-ui/mixins/credit-assignment-props';
import { module, test } from 'qunit';

module('Unit | Mixin | credit-assignment-props', () => {
  // Replace this with your real tests.
  test('it works', (assert) => {
    const CreditAssignmentPropsObject = EmberObject.extend(CreditAssignmentPropsMixin);
    const subject = CreditAssignmentPropsObject.create();
    assert.ok(subject);
  });
});
