import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | check-empty', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('count', 0);

    await render(hbs`
      {{#check-empty count=count noResultsMessage="Nothing here to see"}}
        Something here to see
      {{/check-empty}}
    `);

    assert.dom(this.element).hasText('Nothing here to see');

    this.set('count', 20);

    assert.dom(this.element).hasText('Something here to see');
  });
});
