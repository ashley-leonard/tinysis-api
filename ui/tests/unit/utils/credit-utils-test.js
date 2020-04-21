import {
  getHours,
} from 'tinysis-ui/utils/credit-utils';
import { module, test } from 'qunit';

module('Unit | Utility | credit-utils', () => {
  test('getHours returns expected results', (assert) => {
    const regularCredit = {
      id: 1,
      attributes: {
        creditHours: 1,
      },
    };

    const overriddenCredit = {
      id: 1,
      attributes: {
        creditHours: 1,
        overrideHours: 2,
      },
    };

    const result1 = getHours(regularCredit);
    assert.equal(result1, regularCredit.attributes.creditHours, 'if no override the credit should report as its creditHours value');

    const result2 = getHours(overriddenCredit);
    assert.equal(result2, overriddenCredit.attributes.overrideHours, 'if override, the credit should report its override value');
  });
});
