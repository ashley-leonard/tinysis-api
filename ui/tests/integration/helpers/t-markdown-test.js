import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | t-markdown', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders markdown', async function (assert) {
    const markdown = `
# Hello
- Beep
- Blip
- Boop
`;

    this.set('markdown', markdown);

    await render(hbs`{{t-markdown markdown}}`);

    assert.ok(find('h1'), 'heading was rendered');
    assert.equal(findAll('li').length, 3, 'three bullets were rendered');
  });
});
