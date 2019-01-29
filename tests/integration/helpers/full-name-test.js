import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | full-name', (hooks) => {
  setupRenderingTest(hooks);

  test('it functions properly', async function (assert) {
    this.setProperties({
      beebo: {
        attributes: {
          firstName: 'Bee',
          lastName: 'Bo',
          nickname: 'Beebo!',
        },
      },
      style: null,
    });

    await render(hbs`{{full-name beebo style}}`);

    assert.dom(this.element).hasText('Bo, Bee (Beebo!)', 'lastName, firstName (nickname)');

    this.set('beebo', {
      attributes: {
        firstName: 'Bee',
        lastName: 'Bo',
      },
    });
    assert.dom(this.element).hasText('Bo, Bee', 'lastName, firstName');

    this.set('style', 'first-last');
    assert.dom(this.element).hasText('Bee Bo', 'firstName lastName');
  });
});
