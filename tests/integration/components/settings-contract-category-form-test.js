import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

import fixture from '../../fixtures/categories';
import { clone } from '../../helpers/test-utils';

let requests;
let category;

module('Integration | Component | settings-contract-category-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    category = clone(fixture.data[0]);
    this.setProperties({
      category,
      save(model) {
        requests.push({ type: 'save', model });
        return resolve();
      },
      reportError(error) {
        requests.push({ type: error, error });
      },
    });
  });

  test('it renders and submits the same category without changes', async (assert) => {
    await render(hbs`
      {{settings-contract-category-form
        model=category
        save=save
        reportError=reportError
      }}
    `);

    assert.ok(find('form'), 'container rendered');
    await click('button[type="submit"]');

    const request = requests.pop();
    assert.ok(request, 'outbound request triggered');

    assert.equal(category.attributes.name, request.model.attributes.name);
  });
});
