import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | status-by-coordinator/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:status-by-coordinator/index');
    assert.ok(route);
  });
});
