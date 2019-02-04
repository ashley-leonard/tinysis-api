import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import contractDetailFixture from '../../../fixtures/contract-detail';

let timeslots;

module('Integration | Component | contracts/time-slots', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    ({ timeslots } = contractDetailFixture.data.attributes);

    this.setProperties({
      timeslots,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`{{contracts/time-slots timeslots=timeslots}}`);

    const lis = this.element.querySelectorAll('ul.time-slots li');

    assert.equal(lis.length, timeslots.length, 'expected number of list items rendered');
  });
});
