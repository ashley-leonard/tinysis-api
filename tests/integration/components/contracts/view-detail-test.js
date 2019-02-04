import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractDetail from '../../../fixtures/contract-detail';

let tinyData;
let contract;

module('Integration | Component | contracts/view-detail', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetail);

    contract = tinyData.get('contract', contractDetail.data.id);

    this.setProperties({
      contract,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`{{contracts/view-detail contract=contract}}`);

    assert.ok(this.element.querySelector('.contract-detail'), 'the containing div rendered');
  });
});
