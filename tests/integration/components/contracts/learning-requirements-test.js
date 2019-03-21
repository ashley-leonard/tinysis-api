import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractDetail from '../../../fixtures/contract-detail';

let tinyData;
let contract;

module('Integration | Component | contracts/learning-requirements', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetail);

    contract = tinyData.get('contract', contractDetail.data.id);

    this.setProperties({
      ealrs: contract.relationships.ealrs.data,
    });
  });

  test('it renders', async (assert) => {
    await render(hbs`{{contracts/learning-requirements ealrs=ealrs}}`);

    assert.equal(findAll('dl[data-test-ealrs] dt').length, contract.relationships.ealrs.data.length, 'expected EALR entries rendered');
  });
});
