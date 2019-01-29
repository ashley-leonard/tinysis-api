import QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from '../app';
import config from '../config/environment';

setApplication(Application.create(config.APP));

QUnit.extend(QUnit.assert, {
  matches(actual, regex, message) {
    let result;

    if (typeof regex === 'string') {
      result = actual === regex;
    } else {
      result = regex.test(actual);
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
