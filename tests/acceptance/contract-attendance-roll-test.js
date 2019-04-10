import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';

import contractDetailFixture from '../fixtures/contract-detail';

let server;

module('Acceptance | contract attendance roll', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/contract/:id', contractDetailFixture);

    assert.timeout(200);
  });

  hooks.afterEach(() => {
    server.shutdown();
  });

  test('visiting /tiny/contracts/123/attendance', async (assert) => {
    await visit('/tiny/contracts/123/attendance');

    assert.equal(currentURL(), '/tiny/contracts/123/attendance', 'page navigated to successfully');
  });
});
