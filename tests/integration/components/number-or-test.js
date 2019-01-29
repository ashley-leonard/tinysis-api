import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | number-or', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('number', 225);
    await render(hbs`{{number-or number=number}}`);

    assert.dom(this.element).hasText(/225/);

    this.set('number', 0);

    await render(hbs`{{number-or number=number}}`);

    assert.dom(this.element).hasText('-');

    await render(hbs`{{number-or number=number or='nothing gained'}}`);

    assert.dom(this.element).hasText('nothing gained');
  });
});
