import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-input', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      validations: {
        firstName: {
          error: 'What is your name?',
        },
      },
      pojo: {
        firstName: undefined,
      },
      showErrors: false,
    });

    await render(hbs`
      {{#form-input
        error=validations.firstName.error
        showError=showErrors
        label="First name"
      }}
        <input
          type="text"
          name="firstName"
          value={{pojo.firstName}}
        >
      {{/form-input}}
    `);

    assert.ok(find('label'), 'label wrapper rendered');
    assert.ok(find('label [data-test-label]'), 'label text appeared');
    assert.notOk(find('.error-message'), 'no error message rendered b/c showErrors is false');

    this.set('showErrors', true);

    assert.ok(find('.error-message'), 'with showErrors positive, error message should render');
  });

  test('it renders w/o label', async (assert) => {
    await render(hbs`
      {{#form-input}}
        <input
          type="text"
          name="firstName"
          value={{pojo.firstName}}
        >
      {{/form-input}}
    `);

    assert.ok(find('label'), 'label wrapper rendered');
    assert.notOk(find('label span.label-text'), 'label text appeared');
  });
});
