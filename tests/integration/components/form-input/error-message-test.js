import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-input/error-message', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      message: 'Boo!',
      show: true,
    });

    await render(hbs`{{form-input/error-message
      message=message
      show=show
    }}`);

    assert.ok(find('.error-message'), 'with error present and showErrors true, message element renders');
    assert.matches(find('.error-message').innerText, /Boo!/, 'expected error displayed');

    this.setProperties({
      message: undefined,
      show: true,
    });

    assert.notOk(find('.error-message'), 'with no error and showErrors true, no message element');

    this.setProperties({
      message: 'Boo!',
      show: false,
    });

    assert.notOk(find('.error-message'), 'with error present and showErrors false, no message element');
  });
});
