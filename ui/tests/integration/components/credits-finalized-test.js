import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import studentCreditAssignmentsFixture from '../../fixtures/student-credit-assignments';
import studentsFixture from '../../fixtures/students';
import { stubTinyData } from '../../helpers/stub-tiny-data';

let tinyData;
let creditAssignments;
let student;

module('Integration | Component | credits-finalized', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(studentCreditAssignmentsFixture);
    tinyData.addResult(studentsFixture);
    creditAssignments = tinyData.get('creditAssignment');
    student = tinyData.get('user', creditAssignments[0].relationships.user.data.id);

    this.setProperties({
      student,
      creditAssignments,
    });
  });

  test('it renders with finalized credits', async (assert) => {
    await render(hbs`
      {{credits-finalized
        student=student
        creditAssignments=creditAssignments
      }}
    `);

    const transmittedAssignments = creditAssignments.filter(ca => ca.relationships.creditTransmittalBatch.data);

    assert.equal(findAll('table tbody tr').length, transmittedAssignments.length, 'count of rows matches transmitted credits');
  });
});
