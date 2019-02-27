import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contract-assignments', (hooks) => {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:contract-assignments');
    assert.ok(route);
  });
});
