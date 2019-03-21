import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData, clone } from '../../../helpers/stub-tiny-data';
import contractDetailFixture from '../../../fixtures/contract-detail';
import contractEnrollmentDetail from '../../../fixtures/contract-enrollment-detail';

let tinyDataServiceMock;
let enrollment;
let contract;

module('Integration | Component | status/by-enrollment-summary', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(contractDetailFixture);
    tinyDataServiceMock.addResult(contractEnrollmentDetail);

    contract = tinyDataServiceMock.get('contract', contractDetailFixture.data.id);
    enrollment = tinyDataServiceMock.get('enrollment', contractEnrollmentDetail.data.id);

    this.setProperties({
      contract,
      enrollment,
    });
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{status/by-enrollment-summary
        enrollment=enrollment
        contract=contract
      }}
    `);

    assert.ok(find('dl'), 'enclosing container rendered');
    const enrollmentStatus = find('[data-test-enrollment-status]');
    assert.matches(enrollmentStatus.textContent, 'Active', 'student is shown as currently enrolled');

    assert.ok(enrollmentStatus, 'enrollment status block rendered');

    const assignmentStatus = find('[data-test-assignments-status]');
    assert.ok(assignmentStatus, 'assignment status block rendered');
    assert.matches(assignmentStatus.textContent, /5\s+of\s+5/, 'expected count of assignments shown');

    const attendanceStatus = find('[data-test-attendance-status]');
    assert.ok(attendanceStatus, 'attendance status block rendered');
    assert.matches(attendanceStatus.textContent, /5\s+of\s+5/, 'expected count of meeting attendance shown');
  });

  test('it renders with missing assigments and attendance', async (assert) => {
    enrollment.relationships.turnins.data = enrollment.relationships.turnins.data.slice(2);
    enrollment.relationships.meetingParticipants.data = enrollment.relationships.meetingParticipants.data.slice(2);

    await render(hbs`
      {{status/by-enrollment-summary
        enrollment=enrollment
        contract=contract
      }}
    `);

    assert.ok(find('dl'), 'enclosing container rendered');

    const assignmentStatus = find('[data-test-assignments-status]');
    assert.ok(assignmentStatus, 'assignment status block rendered');
    assert.matches(assignmentStatus.textContent, /3\s+of\s+5/, 'expected count of assignments shown');

    const attendanceStatus = find('[data-test-attendance-status]');
    assert.ok(attendanceStatus, 'attendance status block rendered');
    assert.matches(attendanceStatus.textContent, /3\s+of\s+5/, 'expected count of meeting attendance shown');
  });

  test('it renders with unacceptable assigments and attendance', async function (assert) {
    const enrollmentData = clone(contractEnrollmentDetail);

    enrollmentData.included
      .filter(include => include.type === 'turnin')
      .slice(2)
      .forEach((turnin) => { turnin.attributes.status = 'missing'; });
    enrollmentData.included
      .filter(include => include.type === 'meetingParticipant')
      .slice(2)
      .forEach((meetingParticipant) => { meetingParticipant.attributes.participation = 'absent'; });

    tinyDataServiceMock.addResult(enrollmentData);

    enrollment = tinyDataServiceMock.get('enrollment', contractEnrollmentDetail.data.id);

    this.set('enrollment', enrollment);

    await render(hbs`
      {{status/by-enrollment-summary
        enrollment=enrollment
        contract=contract
      }}
    `);

    assert.ok(find('dl'), 'enclosing container rendered');

    const assignmentStatus = find('[data-test-assignments-status]');
    assert.ok(assignmentStatus, 'assignment status block rendered');
    assert.matches(assignmentStatus.textContent, /2\s+of\s+5/, 'expected count of assignments shown');

    const attendanceStatus = find('[data-test-attendance-status]');
    assert.ok(attendanceStatus, 'attendance status block rendered');
    assert.matches(attendanceStatus.textContent, /2\s+of\s+5/, 'expected count of meeting attendance shown');
  });
});
