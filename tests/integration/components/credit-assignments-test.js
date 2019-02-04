import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import enrollmentsFixture from '../../fixtures/enrollments';

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
});
