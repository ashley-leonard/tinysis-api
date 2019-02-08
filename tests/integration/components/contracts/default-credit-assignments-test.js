import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractDetail from '../../../fixtures/contract-detail';

let tinyData;

module('Integration | Component | contracts/default-credit-assignments', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetail);

    [this.contract] = tinyData.get('contract');
  });

  test('it renders', async function (assert) {
    await render(hbs`{{contracts/default-credit-assignments contract=contract}}`);

    assert.ok(this.element.querySelector('ul.credit-assignments'), 'rendered the credits child component');
  });
});
