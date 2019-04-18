import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Interactor } from '@bigtest/interactor';

let actions;

module('Integration | Component | contract-attendance-roll/set-all', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    actions = [];
    this.setProperties({
      updateAllRolls(contactType, participation) { actions.push({ contactType, participation }); },
    });
  });

  test('it renders and emits expected actions', async (assert) => {
    await render(hbs`
      {{contract-attendance-roll/set-all
        updateAllRolls=updateAllRolls
      }}
    `);

    assert.ok(find('t-contract-attendance-roll-set-all'), 'container rendered');

    await new Interactor('select[name="participation"]').select('Absent');
    await new Interactor('select[name="contactType"]').select('Coor');

    await click('button');

    assert.equal(actions.length, 1, 'one action call occurred');

    const [action] = actions;
    assert.equal(action.contactType, 'coor');
    assert.equal(action.participation, 'absent');
  });
});
