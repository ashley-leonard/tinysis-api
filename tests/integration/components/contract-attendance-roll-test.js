import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import contractDetailFixture from '../../fixtures/contract-detail';
import contractAttendanceRollMeeting from '../../fixtures/contract-attendance-roll-meeting';
import contractAttendanceRollEnrollments from '../../fixtures/contract-attendance-roll-enrollments';
import contractAttendanceRollNotes from '../../fixtures/contract-attendance-roll-notes';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import { clone } from '../../helpers/test-utils';

let actions;
let meeting;
let contract;
let tinyData;
let enrollments;
let absentParticipant;
let presentParticipant;

module('Integration | Component | contract-attendance-roll', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetailFixture);
    tinyData.addResult(contractAttendanceRollMeeting);
    tinyData.addResult(contractAttendanceRollEnrollments);
    tinyData.addResult(contractAttendanceRollNotes);

    contract = tinyData.get('contract', contractDetailFixture.data.id);
    meeting = tinyData.get('meeting', contractAttendanceRollMeeting.data.id);
    enrollments = tinyData.get('enrollment');

    const meetingParticipants = tinyData.get('meetingParticipant');
    absentParticipant = meetingParticipants.find(participant => participant.attributes.participation === 'absent');
    presentParticipant = meetingParticipants.find(participant => participant.attributes.participation === 'present');

    this.setProperties({
      updateRoll(meetingParticipant) { actions.push({ action: 'updateRoll', meetingParticipant }); },
      updateAllRolls(contactType, participation) { actions.push({ action: 'updateAllRolls', contactType, participation }); },
      getNotes() { return clone(contractAttendanceRollNotes); },
      meeting,
      contract,
    });
  });

  test('it renders with two participants', async (assert) => {
    await render(hbs`
      {{contract-attendance-roll
        contract=contract
        meeting=meeting
        updateRoll=updateRoll
        updateAllRolls=updateAllRolls
        getNotes=getNotes
      }}
    `);

    assert.ok(find('t-contract-attendance-roll'), 'container element rendered');
    assert.equal(findAll('tbody tr').length, enrollments.length, 'one row rendered for each participant');

    const presentRow = find(`tr[data-test-enrollment-id="${presentParticipant.relationships.enrollment.data.id}"]`);
    const absentRow = find(`tr[data-test-enrollment-id="${absentParticipant.relationships.enrollment.data.id}"]`);

    assert.ok(presentRow, 'rendered row for present participant');
    assert.ok(presentRow.querySelector('[data-test-participation="present"] value-button[data-test-is-checked="checked"]'), 'rendered present indicator in proper column');

    assert.ok(absentRow, 'rendered row for present participant');
    assert.ok(absentRow.querySelector('[data-test-participation="absent"] value-button[data-test-is-checked="checked"]'), 'rendered absent indicator in proper column');
  });
});
