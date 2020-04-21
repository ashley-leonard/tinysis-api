import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render, find, findAll, fillIn,
} from '@ember/test-helpers';
import { Interactor } from '@bigtest/interactor';
import hbs from 'htmlbars-inline-precompile';

let requests;

module('Integration | Component | credits-filter', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];

    this.setProperties({
      qp: {
        search: 'boo',
        courseType: '',
        status: '',
      },
      updateSearch(queryParams) {
        requests.push(queryParams);
      },
    });
  });

  test('it renders the credits filter', async (assert) => {
    await render(hbs`
      {{credits-filter
        queryParams=qp
        updateSearch=updateSearch
      }}
    `);

    assert.ok(find('form'), 'filter form rendered as promised');
    assert.equal(findAll('select').length, 2, 'two select controls');

    await fillIn('input[name="search"]', 'boyd');
    assert.equal(requests.length, 1, 'a request was made');
    const [nameRequest] = requests;

    assert.matches('boyd', nameRequest.search);

    const select = new Interactor('select[name="courseType"]');
    assert.equal(select.value, '', 'any course type is current selection');

    await select.select('general');

    assert.equal(requests.length, 2, 'now a second request was made');
    const [, courseTypeRequest] = requests;

    assert.matches('boyd', courseTypeRequest.search);
    assert.matches('general', courseTypeRequest.courseType);
  });
});
