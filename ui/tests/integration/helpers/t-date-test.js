import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | t-date', (hooks) => {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    this.setProperties({
      date: '2019-02-24',
    });

    await render(hbs`{{t-date date format}}`);

    assert.dom(this.element).hasText('24 February, 2019', 'renders default format of D MMM, YYYY');

    this.set('format', 'MMM YYYY');

    assert.dom(this.element).hasText('Feb 2019', 'renders alternate format');

    this.set('format', 'termMonth');

    assert.dom(this.element).hasText('February 2019', 'renders termMonth format');

    this.set('format', 'compactTermMonth');

    assert.dom(this.element).hasText('Feb', 'renders compactTermMonth format');
  });
});
