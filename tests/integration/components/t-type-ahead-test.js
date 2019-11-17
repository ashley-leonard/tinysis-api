import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  find,
  fillIn,
  click,
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

let desiredResult;
let requests;
let resultFixture;

module('Integration | Component | t-type-ahead', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    resultFixture = [{
      name: 'Joe',
      value: '1',
    }, {
      name: 'Jane',
      value: '2',
    }, {
      name: 'Beth',
      value: '3',
    }];

    requests = [];

    [, , desiredResult] = resultFixture;
    this.setProperties({
      onSearch(search) {
        requests.push({ type: 'search', search });
        return resolve(resultFixture);
      },
      onChange(result) {
        requests.push({ type: 'change', result });
      },
      results: resultFixture,
      value: '3',
    });
  });

  test('it renders and displays a value', async (assert) => {
    await render(hbs`
      <TTypeAhead
        @value={{value}}
        @onSearch={{onSearch}}
        @onChange={{onChange}}
        @results={{results}}
      />
    `);

    const result = find('t-type-ahead-result');

    assert.ok(result, 'a result is present');
    assert.equal(result.textContent.trim(), desiredResult.name);

    const container = find('t-type-ahead');
    assert.ok(container, 'expected container rendered');

    assert.equal(container.dataset.testValue, desiredResult.value, 'value placed into data-value attribute');
  });

  test('it renders with no initial value', async function (assert) {
    this.set('value', undefined);

    await render(hbs`
      <TTypeAhead
        @value={{value}}
        @onSearch={{onSearch}}
        @onChange={{onChange}}
        @results={{results}}
      />
    `);

    const result = find('t-type-ahead-result');

    assert.notOk(result, 'no result was rendered');
  });

  test('it renders and allows a value to be picked', async function (assert) {
    this.set('value', undefined);

    await render(hbs`
      <TTypeAhead
        @value={{value}}
        @onSearch={{onSearch}}
        @onChange={{onChange}}
        @results={{results}}
      />
    `);

    const result = find('t-type-ahead-result');

    assert.notOk(result, 'no result was rendered');

    await fillIn('input', 'x');

    assert.equal(requests.length, 1, 'one search request');

    let request = requests.pop();
    assert.equal(request.type, 'search', 'was a search request');
    assert.equal(request.search, 'x', 'an x was sent to search');

    [, desiredResult] = resultFixture;

    const selection = find(`[data-test-value="${desiredResult.value}"]`);
    assert.ok(selection, 'expected selection was rendered');
    await click(selection);

    request = requests.pop();
    assert.equal(request.type, 'change', 'was a change request');
    assert.equal(request.result, desiredResult, 'the result we expected was sent');

    const resultOverlay = find('t-type-ahead-result');

    assert.ok(resultOverlay, 'a result is present');
    assert.equal(resultOverlay.textContent.trim(), desiredResult.name, 'expected result is displayed');
  });
});
