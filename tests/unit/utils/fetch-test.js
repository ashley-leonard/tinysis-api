import fetch from 'tinysis-ui/utils/fetch';
import { module, test } from 'qunit';
import Pretender from 'pretender';
import { MockLocalStorage } from '../../helpers/test-utils';

const apiResult = {
  data: [{ bee: 'bo' }],
  meta: {
    count: 1,
  },
};

const api = '/api/bee/bo';
module('Unit | Utility | fetch', (hooks) => {
  hooks.beforeEach(function () {
    this.pretender = new Pretender();
    this.localStorage = new MockLocalStorage();
  });

  hooks.afterEach(function () {
    this.pretender.shutdown();
    this.localStorage.unmock();
  });

  test('exercising /fetch', async function (assert) {
    this.pretender.get(api, () => [200, { 'Content-Type': 'application/json' }, JSON.stringify(apiResult)]);

    const result = await fetch(api);

    assert.ok(result, 'got a response');
    assert.ok(result.data, 'it is the json object we expect');
    assert.equal(result.data[0].bee, 'bo', 'it has the attribute we expect');
  });

  test('exercising /fetch with 204', async function (assert) {
    this.pretender.delete(api, () => [204]);

    const result = await fetch(api, { method: 'DELETE' });

    assert.notOk(result, 'got a null response');
  });

  test('exercising /fetch with error', async function (assert) {
    const errBody = {
      status: 422,
      message: 'Validation error',
      error: 'param is missing or the value is empty: contract',
    };

    this.pretender.get(api, () => [errBody.status, {}, JSON.stringify(errBody)]);

    let err;
    const result = await fetch(api)
      .catch((error) => {
        err = error;
      });

    assert.notOk(result, 'got no response');
    assert.ok(err, 'got an error');
    assert.equal(err.message, 'Unprocessable Entity', 'correctly processed message field');
    assert.equal(err.status, errBody.status, 'correctly processed status field');
    assert.equal(err.body.message, errBody.message, 'correctly processed message field from body');
    assert.equal(err.body.error, errBody.error, 'correctly processed error field from body');
  });
});
