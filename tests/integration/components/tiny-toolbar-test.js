import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tiny-toolbar', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{tiny-toolbar}}`);

    assert.matches(this.element.textContent, /Coordinators/);
    assert.matches(this.element.textContent, /Students/);
    assert.matches(this.element.textContent, /Contracts/);
  });
});
