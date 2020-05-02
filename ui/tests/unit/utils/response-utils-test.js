import { summarizeValidationError } from 'tinysis-ui/utils/response-utils';
import { module, test } from 'qunit';

module('Unit | Utility | response-utils', () => {
  // Replace this with your real tests.
  test('summarizeValidationError works', (assert) => {
    const result = summarizeValidationError({
      errors: {
        boo: ['scared me'],
        hiss: ['made me aggro'],
      },
    });
    assert.ok(result, 'did not crash');
    assert.matches(result, /boo scared me/, 'first error appeared as expected');
    assert.matches(result, /hiss made me aggro/, 'second error appeared as expected');
  });
});
