import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractAttendanceFixture from '../../fixtures/contract-attendance';
import contractAttendanceEnrollmentsFixture from '../../fixtures/contract-attendance-enrollments';
import contractAttendanceNotesFixture from '../../fixtures/contract-attendance-notes';

let tinyData;
let meetings;
let enrollments;
let meetingParticipants;

module('Integration | Component | contract-attendance-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractAttendanceFixture);
    tinyData.addResult(contractAttendanceEnrollmentsFixture);
    tinyData.addResult(contractAttendanceNotesFixture);

    meetings = tinyData.get('meeting');
    enrollments = tinyData.get('enrollment');
    meetingParticipants = tinyData.get('meetingParticipant');

    this.setProperties({
      meetings,
      enrollments,
      getNotes() { return tinyData.get('note'); },
    });
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{contract-attendance-list
        meetings=meetings
        enrollments=enrollments
        getNotes=getNotes
      }}
    `);

    assert.ok(find('table'), 'container rendered');
    assert.equal(findAll('tbody').length, enrollments.length, 'Expected row count');

    const absentParticipant = meetingParticipants.find(record => record.attributes.participation === 'absent');
    const absentEnrollment = enrollments.find(enrollment => enrollment.id === absentParticipant.relationships.enrollment.data.id);
    const absentRow = find(`tbody[data-test-enrollment-id="${absentEnrollment.id}"]`);

    assert.equal(absentRow.querySelectorAll('td[title="Absent"]').length, meetings.length, 'expected number of absent columns');

    const presentParticipant = meetingParticipants.find(record => record.attributes.participation === 'present');
    const presentEnrollment = enrollments.find(enrollment => enrollment.id === presentParticipant.relationships.enrollment.data.id);
    const presentRow = find(`tbody[data-test-enrollment-id="${presentEnrollment.id}"]`);

    assert.equal(presentRow.querySelectorAll('td[title="Present"]').length, meetings.length, 'expected number of present columns');
  });
});
