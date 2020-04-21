import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render, find, click, triggerKeyEvent,
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

let actions;
let meetingParticipant;
let option;

module('Integration | Component | value-button', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    actions = [];

    option = {
      value: 'present',
    };

    meetingParticipant = {
      attributes: {
        participation: 'present',
      },
    };

    this.setProperties({
      option,
      meetingParticipant,
      onkeydown(key, name) { actions.push({ action: 'onkeydown', key, name }); },
      onchange(value, name) { actions.push({ action: 'onchange', value, name }); },
    });
  });

  test('it renders with a selected object', async (assert) => {
    await render(hbs`
      {{value-button
        name="participation"
        optionValue=option.value
        value=meetingParticipant.attributes.participation
        onchange=onchange
        onkeydown=onkeydown
      }}
    `);

    const element = find('value-button');
    assert.ok(element, 'element rendered');
    assert.equal(element.dataset.testIsChecked, 'checked', 'value is selected');
    assert.equal(actions.length, 0, 'no actions triggered yet');
  });

  test('it renders with an unselected object', async (assert) => {
    meetingParticipant.attributes.participation = 'absent';

    await render(hbs`
      {{value-button
        name="participation"
        optionValue=option.value
        value=meetingParticipant.attributes.participation
        onchange=onchange
        onkeydown=onkeydown
      }}
    `);

    const element = find('value-button');
    assert.ok(element, 'element rendered');

    assert.equal(element.dataset.testIsChecked, undefined, 'value is not selected');
    assert.equal(actions.length, 0, 'no actions triggered yet');

    await click('value-button');

    assert.equal(actions.length, 1, 'action triggered');
    let action = actions.pop();

    assert.equal(action.action, 'onchange', 'change event triggered as expected');
    assert.equal(action.value, 'present', 'expected value passed back');
    assert.equal(action.name, 'participation', 'expected name passed');

    await triggerKeyEvent('value-button', 'keydown', 'X');

    assert.equal(actions.length, 1, 'action triggered');
    action = actions.pop();

    assert.equal(action.action, 'onkeydown', 'keydown event triggered as expected');
    assert.equal(action.key, 'X', 'expected key passed back');
  });
});
