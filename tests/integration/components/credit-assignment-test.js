import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import enrollmentsFixture from '../../fixtures/enrollments';

let tinyData;
let credit;
let creditAssignment;

module('Integration | Component | credit-assignment', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(enrollmentsFixture);

    [creditAssignment] = tinyData.get('creditAssignment');
    credit = tinyData.get('credit', creditAssignment.relationships.credit.data.id);

    this.setProperties({
      creditAssignment,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{credit-assignment
        creditAssignment=creditAssignment
      }}
    `);

    assert.dom(this.element).hasText(new RegExp(credit.attributes.courseName));
  });
});
