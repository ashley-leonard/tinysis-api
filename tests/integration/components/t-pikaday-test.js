import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import dayjs from 'dayjs';

let actions;
module('Integration | Component | t-pikaday', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    actions = [];

    this.setProperties({
      value: dayjs('2019-04-01', 'YYYY-MM-DD').toDate(),
      name: 'Boo',
      onchange(date, name) {
        actions.push({ date, name });
      },
    });
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{t-pikaday
        value=value
        onchange=onchange
        name="Boo"
      }}
    `);

    const input = find('input[name="Boo"]');
    assert.ok(input, 'input rendered');
    assert.equal(input.value, '4/1/2019', 'input assigned expected US date value');

    let selectedButton = find('td.is-selected button[data-pika-day="1"]');
    assert.ok(selectedButton, 'expected day button is preselected');
    assert.equal(actions.length, 0, 'no actions pushed yet');

    await click('button[data-pika-day="15"]');

    selectedButton = find('td.is-selected button[data-pika-day="15"]');
    assert.ok(selectedButton, 'expected day button is now selected');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, '2019-04-15', 'expected ISO calendar date supplied');
  });
});
