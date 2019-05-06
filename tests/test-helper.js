import QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import './helpers/flash-message';

import Application from '../app';
import config from '../config/environment';

setApplication(Application.create(config.APP));

QUnit.extend(QUnit.assert, {
  matches(actual, regex, message) {
    let result;

    const _actual = (actual || '').toString();

    if (regex === undefined || regex === null) throw new Error('a regex or string to match is required');

    if (regex instanceof RegExp) {
      result = regex.test(_actual);
    } else {
      result = _actual.includes(regex.toString());
    }

    const expected = `String matching /${regex.toString()}/`;

    this.pushResult({
      result,
      actual,
      expected,
      message: message || `matched ${regex}`,
    });
  },
});

start();
