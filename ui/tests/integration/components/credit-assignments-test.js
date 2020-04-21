import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import enrollmentsFixture from '../../fixtures/student-enrollments';

let tinyData;
let creditAssignments;

module('Integration | Component | credit-assignments', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(enrollmentsFixture);

    creditAssignments = tinyData.get('creditAssignment');

    this.setProperties({
      creditAssignments,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`{{credit-assignments creditAssignments=creditAssignments}}`);

    const expectedCreditAssignments = enrollmentsFixture.included.filter(record => record.type === 'creditAssignment');

    assert.equal(this.element.querySelectorAll('ul.credit-assignments li').length, expectedCreditAssignments.length, 'list items count is correct');
  });

  test('it renders a null list', async function (assert) {
    this.set('creditAssignments', null);

    await render(hbs`
      {{credit-assignments
        creditAssignments=creditAssignments
      }}
    `);

    assert.equal(this.element.querySelectorAll('ul.credit-assignments').length, 0, 'List not rendered');
    assert.equal(this.element.querySelectorAll('p.no-results').length, 1, 'No-results paragraph rendered');
  });
});
