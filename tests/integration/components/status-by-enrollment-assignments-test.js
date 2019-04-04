import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import dayjs from 'dayjs';

import { stubTinyData } from '../../helpers/stub-tiny-data';
import { clone } from '../../helpers/test-utils';
import contractDetailFixture from '../../fixtures/contract-detail';
import contractEnrollmentDetail from '../../fixtures/contract-enrollment-detail';
import notesContractAssignments from '../../fixtures/notes-contract-assignments';

let tinyDataServiceMock;
let enrollment;
let assignment;
let turnin;
let notes;
let contract;
let notesResult;

module('Integration | Component | status-by-enrollment-assignments', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(contractDetailFixture);
    tinyDataServiceMock.addResult(contractEnrollmentDetail);
    tinyDataServiceMock.addResult(notesContractAssignments);

    contract = tinyDataServiceMock.get('contract', contractDetailFixture.data.id);
    enrollment = tinyDataServiceMock.get('enrollment', contractEnrollmentDetail.data.id);
    turnin = tinyDataServiceMock.get('turnin', enrollment.relationships.turnins.data[0].id);
    assignment = tinyDataServiceMock.get('assignment', turnin.relationships.assignment.data.id);
    notes = tinyDataServiceMock.get('note').filter(note => note.relationships.notable.data.type === 'turnin' && note.relationships.notable.data.id === turnin.id);
    notesResult = clone(notesContractAssignments);

    this.setProperties({
      contract,
      enrollment,
      getNotes: () => notesResult,
    });

    tinyDataServiceMock.setToday(dayjs(assignment.attributes.dueDate, 'YYYY-MM-DD', true).add(1, 'day'));
  });

  test('it renders with complete assignments and notes', async (assert) => {
    await render(hbs`
      {{status-by-enrollment-assignments
        contract=contract
        enrollment=enrollment
        getNotes=getNotes
      }}
    `);

    const assnRow = find(`tr[data-test-assignment-id="${assignment.id}"]`);

    assert.ok(assnRow, 'table row was rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-name').textContent, assignment.attributes.name, 'assignment name rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-due').textContent, dayjs(assignment.attributes.dueDate).format('YY'), 'expected year rendered for due date');
    assert.matches(assnRow.querySelector('[data-test-assignment-status]').textContent, 'Complete', 'status is marked as complete');
    assert.equal(assnRow.querySelectorAll('.notes-list-item').length, notes.length, 'expected number of notes rendered');
  });

  test('it renders with incomplete assignment with assignment due', async (assert) => {
    enrollment.relationships.turnins.data = [];
    notesResult = { data: [] };

    await render(hbs`
      {{status-by-enrollment-assignments
        contract=contract
        enrollment=enrollment
        getNotes=getNotes
      }}
    `);

    const assnRow = find(`tr[data-test-assignment-id="${assignment.id}"]`);

    assert.ok(assnRow, 'table row was rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-name').textContent, assignment.attributes.name, 'assignment name rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-due').textContent, dayjs(assignment.attributes.dueDate).format('YY'), 'expected year rendered for due date');
    assert.matches(assnRow.querySelector('[data-test-assignment-status]').textContent, 'Missing', 'status is marked as missing');
    assert.equal(assnRow.querySelectorAll('.notes-list-item').length, 0, 'expected no notes rendered');
  });

  test('it renders with incomplete assignment with assignment not yet due', async (assert) => {
    tinyDataServiceMock.setToday(dayjs(assignment.attributes.dueDate, 'YYYY-MM-DD', true).subtract(1, 'day'));
    enrollment.relationships.turnins.data = [];
    notesResult = { data: [] };

    await render(hbs`
      {{status-by-enrollment-assignments
        contract=contract
        enrollment=enrollment
        getNotes=getNotes
      }}
    `);

    const assnRow = find(`tr[data-test-assignment-id="${assignment.id}"]`);

    assert.ok(assnRow, 'table row was rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-name').textContent, assignment.attributes.name, 'assignment name rendered');
    assert.matches(assnRow.querySelector('[data-test-assignment-due').textContent, dayjs(assignment.attributes.dueDate).format('YY'), 'expected year rendered for due date');
    assert.matches(assnRow.querySelector('[data-test-assignment-status]').textContent.trim(), '', 'status is marked as missing');
    assert.equal(assnRow.querySelectorAll('.notes-list-item').length, 0, 'expected no notes rendered');
  });
});
