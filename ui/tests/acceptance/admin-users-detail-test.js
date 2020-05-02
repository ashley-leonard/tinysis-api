import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import adminUserStudentDetail from '../fixtures/admin-users-student-detail';
import staffFixture from '../fixtures/staff';
import loginDetail from '../fixtures/login-admin';
import adminUsersLoginsFixtures from '../fixtures/admin-users-logins';

let server;
let localStorage;

module('Acceptance | admin user detail', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    localStorage = new MockLocalStorage();

    provisionTinySisBootstrapRoutes(server);

    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', `/api/admin/users/${adminUserStudentDetail.data.id}`, adminUserStudentDetail);
    server.addRequest('get', '/api/admin/logins/:email', loginDetail);
    server.addRequest('put', '/api/admin/users/:id', adminUserStudentDetail);
    server.addRequest('get', '/api/admin/users', { data: [] });
    server.addRequest('get', '/api/admin/logins', adminUsersLoginsFixtures);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(200000);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  const detailUrl = `/tiny/admin/user/${adminUserStudentDetail.data.id}`;
  test(`visiting ${detailUrl}`, async (assert) => {
    await visit(detailUrl);

    assert.equal(currentURL(), detailUrl, 'page navigated to successfully');
    assert.ok(find('form.t-form'), 'user form rendered');

    await click('form button[type="submit"]');

    const logs = server.getLog();
    const put = logs.find(req => req.verb === 'PUT');

    assert.ok(put, 'a put request occurred');
    assert.ok(put.body.data, 'the body should be wrapped under a .data attribute');
  });
});
