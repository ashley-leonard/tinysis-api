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

  test('it renders as a popup without emitting bogus change actions', async function (assert) {
    this.set('value', '2020-12-01');

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
    assert.equal(input.value, '12/1/2020', 'input assigned expected US date value');
    assert.equal(input.type, 'text', 'using text input');

    assert.equal(actions.length, 0, 'no change event was triggered');
  });

  test('it emits the expected change actions', async function (assert) {
    this.set('value', '2020-12-01');

    await render(hbs`
      {{t-pikaday
        value=value
        onchange=onchange
        name="Boo"
      }}
    `);

    const input = find('input[name="Boo"]');
    assert.ok(input, 'input rendered');
    assert.equal(input.value, '12/1/2020', 'input assigned expected US date value');
    assert.equal(input.type, 'hidden', 'using hidden input');

    assert.equal(actions.length, 0, 'no change event was triggered');

    await click('button[data-pika-day="15"]');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, '2020-12-15', 'value was cleared');

    assert.equal('12/15/2020', find('input').value, 'Field shows new date now');
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

  test('it renders as a popup with a blank date value', async function (assert) {
    this.set('value', null);

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
    assert.equal(input.value, '', 'input assigned expected blank value');
    assert.equal(input.type, 'text', 'using text input');
  });

  test('it renders with a JS date object as value', async function (assert) {
    // the start of March 3, 2006 in the current timezone
    this.set('value', new Date(2006, 2, 3));
    await render(hbs`
      {{t-pikaday
        value=value
        onchange=onchange
        name="Boo"
      }}
    `);

    const input = find('input[name="Boo"]');
    assert.ok(input, 'input rendered');
    assert.equal(input.value, '3/3/2006', 'input assigned expected US date value');
    assert.equal(input.type, 'hidden', 'standard treatment is hidden');
    assert.ok(find('.pika-single'), 'container rendered within this element');

    let selectedButton = find('td.is-selected button[data-pika-day="3"]');
    assert.ok(selectedButton, 'expected day button is preselected');
    assert.equal(actions.length, 0, 'no actions pushed yet');

    await click('button[data-pika-day="15"]');

    selectedButton = find('td.is-selected button[data-pika-day="15"]');
    assert.ok(selectedButton, 'expected day button is now selected');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, '2006-03-15', 'expected ISO calendar date supplied');
  });

  test('it can clear its value', async function (assert) {
    // the start of March 3, 2006 in the current timezone
    this.set('value', '2006-02-03');
    await render(hbs`
      {{t-pikaday
        value=value
        onchange=onchange
        name="Boo"
        showClear=true
        popup=true
      }}
    `);

    await click('[data-test-clear]');

    assert.equal(actions.length, 1, 'one action event pushed');
    const [action] = actions;
    assert.equal(action.name, 'Boo', 'expected name supplied in action argument');
    assert.equal(action.date, null, 'value was cleared');

    assert.equal('', find('input').value, 'Field shows blank now');
  });
});
