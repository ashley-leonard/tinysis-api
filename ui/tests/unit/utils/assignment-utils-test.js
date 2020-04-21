import { isAssignmentDue } from 'tinysis-ui/utils/assignment-utils';
import { module, test } from 'qunit';
import dayjs from 'dayjs';
import { clone } from '../../helpers/test-utils';
import assignmentsFixture from '../../fixtures/contract-assignments';

let assignments;

module('Unit | Utility | assignment-utils', (hooks) => {
  hooks.beforeEach(() => {
    assignments = clone(assignmentsFixture.data);
  });

  test('isAssigmentDue returns expected values', (assert) => {
    const [assignment] = assignments;
    const dayAfter = dayjs(assignment.attributes.dueDate).add(1, 'day');

    assert.equal(isAssignmentDue(assignment, dayAfter), true, 'assignment was overdue the day after');

    const dayBefore = dayjs(assignment.attributes.dueDate).subtract(1, 'day');

    assert.equal(isAssignmentDue(assignment, dayBefore), false, 'assignment was not overdue the day before');

    const dayOf = dayjs(assignment.attributes.dueDate);

    assert.equal(isAssignmentDue(assignment, dayOf), false, 'assignment was not overdue the day of');
  });
});
