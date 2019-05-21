import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import adminTermsListFixture from '../../fixtures/admin-terms-list';

let terms;
let tinyDataServiceMock;

module('Integration | Component | admin-terms-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(adminTermsListFixture);

    terms = tinyDataServiceMock.get('term');

    this.set('terms', terms);
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{admin-terms-list
        terms=terms
      }}
    `);

    assert.equal(findAll('tbody tr').length, terms.length, 'expected count of terms rendered');
  });
});
