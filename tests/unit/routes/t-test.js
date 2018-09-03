import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | t', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:t');
    assert.ok(route);
  });
});
