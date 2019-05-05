import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

let actions;
module('Integration | Component | t-pikaday', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    actions = [];

    this.setProperties({
      value: '2011-04-01',
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
    assert.equal(input.value, '4/1/2011', 'input assigned expected US date value');
    assert.equal(input.type, 'hidden', 'standard treatment is hidden');
    assert.ok(find('.pika-single'), 'container rendered within this element');

    let selectedButton = find('td.is-selected button[data-pika-day="1"]');
    assert.ok(selectedButton, 'expected day button is preselected');
    assert.equal(actions.length, 0, 'no actions pushed yet');

    await click('button[data-pika-day="15"]');

    selectedButton = find('td.is-selected button[data-pika-day="15"]');
    assert.ok(selectedButton, 'expected day button is now selected');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, '2011-04-15', 'expected ISO calendar date supplied');
  });

  test('it renders as a popup', async (assert) => {
    await render(hbs`
      {{t-pikaday
        value=value
        onchange=onchange
        name="Boo"
        popup=true
      }}
    `);

    const input = find('input[name="Boo"]');
    assert.ok(input, 'input rendered');
    assert.equal(input.value, '4/1/2011', 'input assigned expected US date value');
    assert.equal(input.type, 'text', 'using text input');

    assert.ok(document.querySelector('.pika-single'), 'pikaday container rendered upon insertion');
    assert.ok(document.querySelector('.pika-single.is-hidden'), 'pikaday container is hidden upon insertion');

    await click('input');

    assert.ok(document.querySelector('.pika-single'), 'container rendered');
    assert.notOk(find('.pika-single'), 'pikaday container did not render within component element');

    let selectedButton = document.querySelector('td.is-selected button[data-pika-day="1"]');
    assert.ok(selectedButton, 'expected day button is preselected');
    assert.equal(actions.length, 0, 'no actions pushed yet');

    await click(document.querySelector('button[data-pika-day="15"]'));

    selectedButton = document.querySelector('td.is-selected button[data-pika-day="15"]');
    assert.ok(selectedButton, 'expected day button is now selected');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, '2011-04-15', 'expected ISO calendar date supplied');
  });
});
