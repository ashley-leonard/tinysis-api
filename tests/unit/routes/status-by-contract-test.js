import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | status-by-contract', (hooks) => {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:status-by-contract');
    assert.ok(route);
  });
});
