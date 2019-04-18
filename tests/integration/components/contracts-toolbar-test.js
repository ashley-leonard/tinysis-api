import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | contracts-toolbar', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async (assert) => {
    await render(hbs`{{contracts-toolbar}}`);

    assert.ok(find('nav'), 'basic test to confirm successful render');
  });
});
