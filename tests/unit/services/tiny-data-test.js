import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Pretender from 'pretender';
import notesResult from '../../fixtures/notes-contract-enrollments';

const apiResult = {
  data: [{ bee: 'bo' }],
  meta: {
    count: 1,
  },
};

const api = '/api/bee/bo';
let fetches;

module('Unit | Service | tiny-data', (hooks) => {
  hooks.beforeEach(function () {
    this.pretender = new Pretender();
    fetches = [];
    this.pretender.get(api, (pretenderRequest) => {
      fetches.push({
        method: pretenderRequest.method,
        url: pretenderRequest.url,
        params: pretenderRequest.params,
        queryParams: pretenderRequest.queryParams,
        requestBody: pretenderRequest.requestBody && JSON.parse(pretenderRequest.requestBody),
      });
      return [200, { 'Content-Type': 'application/json' }, JSON.stringify(apiResult)];
    });
  });

  hooks.afterEach(function () {
    this.pretender.shutdown();
  });

  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    assert.ok(service);
  });

  test('it makes ajax request', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    service.fetch(api);
    assert.equal(fetches.length, 1, 'ajax request occurred');

    const [request] = fetches;
    assert.matches(request.url, api, 'expected API call occurred');
    assert.equal(request.method, 'GET', 'expected a GET request');
    assert.equal(Object.keys(request.queryParams).length, 0, 'no query params');
    assert.notOk(request.requestBody, 'no request body');
  });

  test('it handles query params', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    service.fetch(api, {
      params: {
        bee: 1,
        boo: 'boo',
      },
    });
    assert.equal(fetches.length, 1, 'ajax request occurred');

    const [request] = fetches;
    assert.matches(request.url, api, 'expected API call occurred');
    assert.equal(request.method, 'GET', 'expected a GET request');
    assert.equal(Object.keys(request.queryParams).length, 2, 'two query params');
    assert.equal(request.queryParams.bee, '1', 'numeric param was sent');
    assert.equal(request.queryParams.boo, 'boo', 'string param was sent');
    assert.notOk(request.requestBody, 'no request body');
  });

  test('it handles a mix of query params', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    service.fetch(`${api}?foo=bar`, {
      params: {
        bee: 1,
        boo: 'boo',
      },
    });
    assert.equal(fetches.length, 1, 'ajax request occurred');

    const [request] = fetches;
    assert.matches(request.url, api, 'expected API call occurred');
    assert.equal(request.method, 'GET', 'expected a GET request');
    assert.equal(Object.keys(request.queryParams).length, 3, 'three query params, one provided via url and two via params object');
    assert.equal(request.queryParams.bee, '1', 'numeric param was sent');
    assert.equal(request.queryParams.boo, 'boo', 'string param was sent');
    assert.equal(request.queryParams.foo, 'bar', 'path-provided query param was sent');
    assert.notOk(request.requestBody, 'no request body');
  });

  test('it stores a JSON api result', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    service.addResult(notesResult);

    const [fixture] = notesResult.data;
    const note = service.get('note', fixture.id);
    assert.ok(note, 'object exists');
    assert.notEqual(note, fixture, 'object is not the same as the original');
    assert.equal(note.id, fixture.id, 'correct fixture was retrieved');
    assert.equal(note.attributes.note, fixture.attributes.note, 'attributes were retrieved');

    const creator = service.get('user', note.relationships.creator.data.id);
    assert.ok(creator, 'included object was stored as well');
    assert.equal(note.relationships.creator.data.id, creator.id);
  });

  test('sets and retrieves dates', function (assert) {
    const service = this.owner.lookup('service:tiny-data');
    const today = new Date();

    assert.ok(service.getToday(), 'a default date of today is retrieved');

    service.setToday(today);
    assert.equal(today.toISOString(), service.getToday().toISOString());
  });
});
