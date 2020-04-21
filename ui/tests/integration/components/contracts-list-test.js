import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractsFixture from '../../fixtures/contracts';
import termsFixture from '../../fixtures/terms';
import categoriesFixture from '../../fixtures/categories';
import staffFixture from '../../fixtures/staff';

let tinyDataServiceMock;

module('Integration | Component | contracts-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(contractsFixture);
    tinyDataServiceMock.addResult(termsFixture);
    tinyDataServiceMock.addResult(staffFixture);
    tinyDataServiceMock.addResult(categoriesFixture);

    this.set('contracts', tinyDataServiceMock.get('contract'));
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{contracts-list
        contracts=contracts
      }}
    `);

    const rows = this.element.querySelectorAll('tbody tr');

    assert.equal(rows.length, contractsFixture.data.length, 'expected row count available');
    assert.matches(rows[0].textContent, new RegExp(contractsFixture.data[0].attributes.name));
  });
});
