import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import adminUsersFixtures from '../fixtures/admin-users';
import adminUsersLoginsFixtures from '../fixtures/admin-users-logins';

import staffFixture from '../fixtures/staff';

let server;
let localStorage;

module('Acceptance | admin users list', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    localStorage = new MockLocalStorage();

    provisionTinySisBootstrapRoutes(server);

    server.addRequest('get', '/api/staff', staffFixture);
    server.addRequest('get', '/api/admin/users', adminUsersFixtures);
    server.addRequest('get', '/api/admin/logins', adminUsersLoginsFixtures);

    // this should always be done with mocks.
    // prevents test from hanging for minutes when Pretender crashes.
    assert.timeout(500);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  test('visiting /tiny/admin/users', async (assert) => {
    await visit('/tiny/admin/users');

    assert.equal(currentURL(), '/tiny/admin/users', 'page navigated to successfully');
    assert.ok(find('[data-test-admin-users-list]'), 'students list component rendered');
    assert.equal(findAll('[data-test-admin-users-list-row]').length, adminUsersFixtures.data.length, 'expected count of student rows rendered');
  });

  test('visiting /tiny/admin/users with no matching students', async (assert) => {
    const users = server.getFixture('/api/admin/users');
    users.data = [];
    users.meta.count = 0;

    await visit('/tiny/admin/users');

    assert.equal(currentURL(), '/tiny/admin/users', 'page navigated to successfully');
    assert.notOk(find('[data-test-admin-users-list]'), 'student list component not rendered');
    assert.ok(find('p.no-results'), 'no-results component was rendered in place of table');
  });
});
