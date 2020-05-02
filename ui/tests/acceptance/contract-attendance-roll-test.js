import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  find,
  findAll,
  click,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { Interactor } from '@bigtest/interactor';
import MockServer, { provisionTinySisBootstrapRoutes } from '../helpers/mock-server';
import { MockLocalStorage } from '../helpers/test-utils';

import contractDetailFixture from '../fixtures/contract-detail';
import contractAttendanceRollMeetingFixture from '../fixtures/contract-attendance-roll-meeting';
import contractAttendanceRollEnrollments from '../fixtures/contract-attendance-roll-enrollments';
import contractAttendanceRollNotes from '../fixtures/contract-attendance-roll-notes';

let server;
let localStorage;

const contractAttendanceRollUrl = `/tiny/contract/${contractDetailFixture.data.id}/attendance/${contractAttendanceRollMeetingFixture.data.id}`;

module('Acceptance | contract attendance roll', (hooks) => {
  setupApplicationTest(hooks);

  hooks.beforeEach((assert) => {
    server = new MockServer();
    localStorage = new MockLocalStorage();

    provisionTinySisBootstrapRoutes(server);

    server.addRequest('get', '/api/contracts/:id', contractDetailFixture);
    server.addRequest('get', '/api/meetings/:id', contractAttendanceRollMeetingFixture);
    server.addRequest('get', '/api/enrollments', contractAttendanceRollEnrollments);
    server.addRequest('get', '/api/notes', contractAttendanceRollNotes);

    assert.timeout(200);
  });

  hooks.afterEach(() => {
    server.shutdown();
    localStorage.unmock();
  });

  test(`visiting ${contractAttendanceRollUrl}`, async (assert) => {
    await visit(contractAttendanceRollUrl);

    assert.equal(currentURL(), contractAttendanceRollUrl, 'page navigated to successfully');
    assert.ok(find('t-contract-attendance-roll'), 'container element rendered');
    assert.ok(find('t-contract-attendance-roll-set-all'), 'setall form rendered');
  });


  test(`exercising set-all on ${contractAttendanceRollUrl}`, async (assert) => {
    const updatedParticipants = server.getFixture('/api/meetings/:id')
      .included
      .filter(record => record.type === 'meetingParticipant')
      .map(mp => ({
        ...mp,
        attributes: {
          ...mp.attributes,
          contactType: 'coor',
          participation: 'absent',
        },
      }));
    const patchPath = '/api/meetings/1/update_roll';

    server.addRequest('patch', patchPath, { data: updatedParticipants });
    await visit(contractAttendanceRollUrl);

    await new Interactor('t-contract-attendance-roll-set-all select[name="participation"]').select('Absent');
    await new Interactor('t-contract-attendance-roll-set-all select[name="contactType"]').select('Coor');

    await click('t-contract-attendance-roll-set-all button');

    const logs = server.getLog();
    const patchLog = logs.find(log => log.verb === 'PATCH');
    assert.ok(patchLog, 'patch request occurred');
    assert.equal(patchLog.path, patchPath, 'expected path was hit');
    assert.equal(patchLog.body.data.attributes.contactType, 'coor', 'expected contact type was sent');
    assert.equal(patchLog.body.data.attributes.participation, 'absent', 'expected participation was sent');

    findAll('t-contract-attendance-roll tbody tr')
      .forEach((row) => {
        assert.ok(row.querySelector('[data-test-participation="absent"] value-button[data-test-is-checked="checked"]'), 'enrollment row is marked absent now');
        const contactTypeValue = new Interactor(row.querySelector('select')).value;
        assert.equal(contactTypeValue, 'coor', 'contactType select is properly set');
      });
  });

  test(`exercising set participation and contact type on ${contractAttendanceRollUrl}`, async (assert) => {
    // debounce requires this
    assert.timeout(3000);

    const updatedParticipant = server.getFixture('/api/meetings/:id')
      .included
      .filter(record => record.type === 'meetingParticipant')
      .pop();

    updatedParticipant.attributes = {
      ...updatedParticipant.attributes,
      participation: 'excused',
      contactType: 'coor',
    };
    const putPath = `/api/meeting_participants/${updatedParticipant.id}`;

    server.addRequest('put', putPath, { data: updatedParticipant });
    await visit(contractAttendanceRollUrl);

    const row = find(`tr[data-test-enrollment-id="${updatedParticipant.relationships.enrollment.data.id}"]`);
    assert.ok(row, 'found row as expected');

    new Interactor(row.querySelector('select')).select('Coor');
    await click(row.querySelector('[data-test-participation="excused"] value-button'));

    const logs = server.getLog();

    const putLog = logs.find(log => log.verb === 'PUT');
    assert.ok(putLog, 'put request occurred');
    assert.equal(putLog.path, putPath, 'expected path was hit');
    assert.equal(putLog.body.data.attributes.contactType, 'coor', 'expected contact type was sent');
    assert.equal(putLog.body.data.attributes.participation, 'excused', 'expected participation was sent');
  });
});
