import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import contractDetailFixture from '../../../fixtures/contract-detail';

let timeslot;

module('Integration | Component | contracts/time-slots-item', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    const { timeslots } = contractDetailFixture.data.attributes;

    [timeslot] = timeslots;

    this.setProperties({
      timeslot,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <ul>
        {{contracts/time-slots-item timeslot=timeslot}}
      </ul>
    `);

    const li = this.element.querySelector('li');

    assert.matches(li.textContent.trim(), new RegExp(timeslot.start));
    assert.matches(li.textContent.trim(), new RegExp(timeslot.end));
    assert.matches(li.textContent.trim(), /M.T.W.R.F/);
  });
});
