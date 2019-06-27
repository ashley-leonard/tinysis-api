import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | t-notice', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      {{#t-notice type="alert"}}
        NOTICE!
      {{/t-notice}}
    `);

    assert.equal(this.element.textContent.trim(), 'NOTICE!');
  });
});
