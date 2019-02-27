import { module, test } from 'qunit';
import {
  info,
  log,
  warn,
  error,
} from 'tinysis-ui/utils/logger';

module('Unit | Utility | logger', () => {
  test('it works', (assert) => {
    [
      info,
      log,
      warn,
      error,
    ].forEach((logLevel) => {
      logLevel('logging test');
      assert.ok(true, `Log level of "${logLevel}" accomplished without crashing`);
    });
  });
});
