import logger from 'tinysis-ui/utils/logger';
import { module, test } from 'qunit';

module('Unit | Utility | logger', () => {
  test('it works', (assert) => {
    [
      'info',
      'log',
      'warn',
      'error',
    ].forEach((logLevel) => {
      logger[logLevel](logLevel);
      assert.ok(true, `Log level of "${logLevel}" accomplished without crashing`);
    });
  });
});
