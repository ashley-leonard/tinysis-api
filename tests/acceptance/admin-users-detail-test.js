import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';

import adminUserStudentDetail from '../fixtures/admin-users-student-detail';
import staffFixture from '../fixtures/staff';

let server;

module('Acceptance | admin user detail', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();

    provisionTinySisBootstrapRoutes(server);

    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', `/api/admin/users/${adminUserStudentDetail.data.id}`, adminUserStudentDetail);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(500);
  });

  hooks.afterEach(() => {
    server.shutdown();
  });

  const detailUrl = `/tiny/admin/user/${adminUserStudentDetail.data.id}`;
  test(`visiting ${detailUrl}`, async (assert) => {
    await visit(detailUrl);

    assert.equal(currentURL(), detailUrl, 'page navigated to successfully');
    assert.ok(find('form.t-form'), 'user form rendered');
  });
});
