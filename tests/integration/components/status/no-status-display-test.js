import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | status/no-status-display', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('isActiveMonth', true);

    await render(hbs`
      <table>
        <tr>
          {{status/no-status-display isActiveMonth}}
        </tr>
      </table>
    `);

    const element = find('td');

    assert.ok(element, 'table cel rendered');
    assert.matches(element.textContent.trim(), '?', 'no-status active month indicator displayed');

    this.set('isActiveMonth', false);

    assert.matches(element.textContent.trim(), '-', 'inactive month display');
  });
});
