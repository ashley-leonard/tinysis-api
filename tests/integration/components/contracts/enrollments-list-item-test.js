import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractEnrollments from '../../../fixtures/contract-enrollments';
import contractEnrollmentsNotes from '../../../fixtures/notes-contract-enrollments';

let tinyData;

module('Integration | Component | contracts/enrollments-list-item', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollments);
    tinyData.addResult(contractEnrollmentsNotes);

    [this.enrollment] = contractEnrollments.data;
    this.notablesHash = generateNotableHash(contractEnrollmentsNotes, contractEnrollments.data, 'id');
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <table>
        {{contracts/enrollments-list-item
          enrollment=enrollment
          notablesHash=notablesHash
        }}
      </table>
    `);

    const participant = tinyData.get('user', this.enrollment.relationships.participant.data.id);
    const nameTd = this.element.querySelector('tr td:nth-of-type(1)');
    assert.matches(nameTd.textContent, participant.attributes.lastName, 'contains last name');
    assert.matches(nameTd.textContent, participant.attributes.firstName, 'contains first name');

    const statusTd = this.element.querySelector('tr td:nth-of-type(2)');
    assert.matches(statusTd.textContent, 'enrolled', 'contains a status');

    const creditsTd = this.element.querySelector('tr td:nth-of-type(3)');
    const creditAssignment = tinyData.get('creditAssignment', this.enrollment.relationships.creditAssignments.data[0].id);
    assert.matches(creditsTd.textContent, creditAssignment.attributes.creditHours, 'contains credit hours');

    const credit = tinyData.get('credit', creditAssignment.relationships.credit.data.id);
    assert.matches(creditsTd.textContent, credit.attributes.courseName, 'contains a credit name');
  });
});
