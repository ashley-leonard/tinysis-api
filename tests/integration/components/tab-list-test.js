import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Interactor } from '@bigtest/interactor';

let events;

module('Integration | Component | tab-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    events = [];

    this.onClick = (name, tab) => {
      events.push({ name, tab });
    };
    this.tabs = [{
      name: 'One',
      value: 1,
    }, {
      name: 'Two',
      value: 2,
    }];
    this.currentTab = this.tabs[0].name;
  });

  test('it renders and processes a click', async function (assert) {
    await render(hbs`
      {{tab-list
        tabs=tabs
        currentTab=currentTab
        onclick=onClick
      }}
    `);

    assert.equal(this.element.querySelectorAll('button.tab-list-tab').length, this.tabs.length);

    let currentTab = this.element.querySelector('.tab-list-tab.current-tab-list-tab');
    assert.ok(currentTab, 'a current tab was rendered');
    assert.matches(currentTab.textContent, /One/, 'correct current tab was rendered');

    await new Interactor('.tab-list-tab:nth-of-type(2)').click();

    assert.equal(events.length, 1, 'an onChange event was triggered');

    const [event] = events;

    assert.equal(event.name, this.tabs[1].name, 'expected value passed');

    currentTab = this.element.querySelector('.tab-list-tab.current-tab-list-tab');
    assert.ok(currentTab, 'after click, a current tab was rendered');
    assert.matches(currentTab.textContent, /Two/, 'after click, correct current tab was rendered');
  });
});
