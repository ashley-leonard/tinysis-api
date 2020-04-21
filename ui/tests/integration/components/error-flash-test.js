import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | error-flash', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders without an error', async function (assert) {
    await render(hbs`
      <ErrorFlash
        @error={{this.error}}
        @defaultMessage="A default error"
      />
    `);

    assert.equal(this.element.textContent.trim(), '', 'No markup is rendered unless the error object is present');
  });

  test('it renders with an error', async function (assert) {
    this.error = {
      body: {
        message: 'Baloo',
        error: 'My sweet',
      },
      message: 'Invalid something',
    };

    await render(hbs`
      <ErrorFlash
        @error={{this.error}}
        @defaultMessage="A default error"
      />
    `);

    const element = find('.flash-message');
    assert.ok(element, 'flash message rendered');
    assert.equal(element.textContent.trim(), 'Baloo: My sweet');

    await click(element.querySelector('span'));

    assert.equal(this.element.textContent.trim(), '', 'error was cleared due to X clicked');
  });

  test('error variants', async function (assert) {
    this.error = {
      body: {
        message: 'Baloo',
      },
      message: 'Invalid something',
    };

    await render(hbs`
      <ErrorFlash
        @error={{this.error}}
        @defaultMessage="A default error"
      />
    `);

    let element = find('.flash-message');
    assert.ok(element, 'flash message rendered');
    assert.equal(element.textContent.trim(), 'Baloo');

    this.set('error', {
      message: 'Flloooo',
    });

    element = find('.flash-message');
    assert.ok(element, 'flash message rendered');
    assert.equal(element.textContent.trim(), 'Flloooo');
  });
});
