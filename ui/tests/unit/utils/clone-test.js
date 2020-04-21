import clone from 'tinysis-ui/utils/clone';
import { module, test } from 'qunit';

module('Unit | Utility | clone', () => {
  test('it clones!', (assert) => {
    const obj = {
      bee: {
        bop: {
          boop: 1,
        },
      },
    };

    let result = clone(obj);
    assert.ok(result, 'successful result yielded from clone');
    assert.notEqual(obj, result, 'base object cloned');
    assert.notEqual(obj.bee, result.bee, 'child object cloned');
    assert.notEqual(obj.bee.bop, result.bee.bop, 'child object cloned');
    assert.equal(obj.bee.bop.boop, result.bee.bop.boop, 'nested value copied');

    const array = [obj];
    result = clone(array);

    assert.ok(result, 'successful result array yielded from clone');
    assert.notEqual(obj, result, 'base array cloned');

    const [contained] = result;
    assert.notEqual(obj.bee, contained.bee, 'contained object cloned');
    assert.notEqual(obj.bee.bop, contained.bee.bop, 'child object cloned');
    assert.equal(obj.bee.bop.boop, contained.bee.bop.boop, 'nested value copied');
  });
});
