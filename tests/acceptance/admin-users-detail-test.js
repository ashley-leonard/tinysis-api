import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import adminUserStudentDetail from '../fixtures/admin-users-student-detail';
import staffFixture from '../fixtures/staff';
import loginDetail from '../fixtures/login-admin';

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
    server.addRequest('get', '/api/admin/login', loginDetail);
    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(500);
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
  });
});
