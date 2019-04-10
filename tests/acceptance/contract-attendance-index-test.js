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
import contractAttendanceMeetingFixture from '../fixtures/contract-attendance';
import contractAttendanceEnrollmentsFixture from '../fixtures/contract-attendance-enrollments';
import contractAttendanceNotesFixture from '../fixtures/contract-attendance-notes';

let server;

module('Acceptance | contract attendance index', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    provisionTinySisBootstrapRoutes(server);
    server.addRequest('get', '/api/contracts/:id', contractDetailFixture);
    server.addRequest('get', '/api/meetings', contractAttendanceMeetingFixture);
    server.addRequest('get', '/api/enrollments', contractAttendanceEnrollmentsFixture);
    server.addRequest('get', '/api/notes', contractAttendanceNotesFixture);

    assert.timeout(200);
  });

  hooks.afterEach(() => {
    server.shutdown();
  });

  const attendanceListRoute = '/tiny/contract/123/attendance';
  test(`visiting ${attendanceListRoute}`, async (assert) => {
    await visit(attendanceListRoute);

    assert.equal(currentURL(), attendanceListRoute, 'page navigated to successfully');
    assert.ok(find(`.count-paragraph[data-test-count-paragraph="${contractAttendanceMeetingFixture.data.length}"]`), 'expected count of meetings seen');
  });
});
