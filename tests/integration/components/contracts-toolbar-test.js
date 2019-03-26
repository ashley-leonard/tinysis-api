import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | contracts-toolbar', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{contracts-toolbar}}`);

    assert.ok(this.element.querySelector('ul.pure-menu-list'), 'basic test to confirm successful render');
  });
});
