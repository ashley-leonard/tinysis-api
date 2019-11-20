import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Interactor } from '@bigtest/interactor';

let events;

module('Integration | Component | t-select', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    events = [];

    this.onChange = (value, name) => {
      events.push({ value, name });
    };

    this.simpleOptions = ['1', '2', '3', '4', '5'];
    this.objectOptions = [{
      id: 'red',
      name: 'Red!',
    }, {
      id: 'blue',
      name: 'Blue!',
    }];
  });

  test('it renders simple case and emits change events', async function (assert) {
    this.value = '';
    this.name = 'test';

    await render(hbs`
      <TSelect
        @prompt="select something"
        @optionsList={{simpleOptions}}
        @value={{value}}
        name={{name}}
        @onchange={{onChange}}
      />
    `);

    const selects = this.element.querySelectorAll('select');

    assert.equal(selects.length, 1, 'one select rendered');

    let options = Array.prototype.slice.call(this.element.querySelectorAll('option'));
    assert.equal(options.length, this.simpleOptions.length + 1, 'appropriate number of options');

    let selectedOptions = options.filter(option => option.selected);
    assert.equal(selectedOptions.length, 1, 'expect one selected option');
    assert.equal(selectedOptions.pop().value, '', 'the prompt is expected to be selected');

    this.set('value', '1');

    await render(hbs`
      <TSelect
        @prompt="select something"
        @optionsList={{simpleOptions}}
        @value={{value}}
        name={{name}}
        @onchange={{onChange}}
      />
    `);

    options = Array.prototype.slice.call(this.element.querySelectorAll('option'));
    selectedOptions = options.filter(option => option.selected);

    assert.equal(selectedOptions.length, 1, 'expect one selected option');
    assert.equal(selectedOptions.pop().value, '1', 'the option valued "1" is expected to be selected');

    const selectValue = '3';
    await new Interactor('select[name="test"]').select(selectValue);

    assert.equal(events.length, 1, 'an onChange event was triggered');

    const [event] = events;

    assert.equal(event.value, selectValue, 'expected value passed');
    assert.equal(event.name, this.name, 'expected name passed');
  });

  test('it renders object list and emits change events', async function (assert) {
    this.value = '';
    this.name = 'test';

    await render(hbs`
      <TSelect
        @prompt="select something"
        @optionsList={{objectOptions}}
        @value={{value}}
        name={{name}}
        @optionNamePath="name"
        @optionValuePath="id"
        @onchange={{onChange}}
      />
    `);

    const selects = this.element.querySelectorAll('select');

    assert.equal(selects.length, 1, 'one select rendered');

    let options = Array.prototype.slice.call(this.element.querySelectorAll('option'));
    assert.equal(options.length, this.objectOptions.length + 1, 'appropriate number of options');

    let selectedOptions = options.filter(option => option.selected);
    assert.equal(selectedOptions.length, 1, 'expect one selected option');
    assert.equal(selectedOptions.pop().value, '', 'the prompt is expected to be selected');

    this.set('value', 'red');

    await render(hbs`
      <TSelect
        @prompt="select something"
        @optionsList={{objectOptions}}
        @value={{value}}
        name={{name}}
        @optionNamePath="name"
        @optionValuePath="id"
        @onchange={{onChange}}
      />
    `);

    options = findAll('option');
    selectedOptions = options.filter(option => option.selected);

    assert.equal(selectedOptions.length, 1, 'expect one selected option');
    assert.equal(selectedOptions.pop().value, 'red', 'the option valued "red" is expected to be selected');

    const [selectValue] = this.objectOptions;

    await new Interactor('select[name="test"]').select(selectValue.name);

    assert.equal(events.length, 1, 'an onChange event was triggered');

    const [event] = events;

    assert.equal(event.value, selectValue.id, 'expected value passed');
    assert.equal(event.name, this.name, 'expected name passed');
  });
});
