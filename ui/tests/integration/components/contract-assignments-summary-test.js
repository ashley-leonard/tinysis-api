import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractDetailFixture from '../../fixtures/contract-detail';

let tinyData;
let assignments;

module('Integration | Component | contract-assignments-summary', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetailFixture);

    assignments = tinyData.get('assignment');

    this.setProperties({
      assignments,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`{{contract-assignments-summary assignments=assignments}}`);

    assert.equal(this.element.querySelectorAll('ul.assignments-summary li').length, this.assignments.length, 'rendered expected number of assignment items');
  });
});
