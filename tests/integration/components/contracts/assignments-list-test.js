import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import { resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractAssignments from '../../../fixtures/contract-assignments';
import contractAssignmentsEnrollments from '../../../fixtures/contract-assignment-enrollments';
import contractAssignmentsNotes from '../../../fixtures/notes-contract-assignments';

let tinyData;

module('Integration | Component | contracts/assignments-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractAssignments);
    tinyData.addResult(contractAssignmentsNotes);
    tinyData.addResult(contractAssignmentsEnrollments);

    this.assignments = contractAssignments.data;
    this.enrollments = contractAssignmentsEnrollments.data;

    this.getNotes = () => resolve(contractAssignmentsNotes);
  });

  test('it renders', async (assert) => {
    await render(hbs`
      {{contracts/assignments-list
        assignments=assignments
        enrollments=enrollments
        getNotes=getNotes
        notesExpanded=true
      }}
    `);

    assert.ok(find('table.assignments-list'), 'table rendered');
    assert.equal(findAll('.assignments-list tbody').length, contractAssignmentsEnrollments.data.length, 'rendered expected number of enrollment rows');
    assert.equal(findAll('.assignments-list thead th.assignments-list-header').length, contractAssignments.data.length, 'rendered expected number of assignment columns');

    const enrollmentWithTurnins = contractAssignmentsEnrollments.data
      .find(enrollment => enrollment.relationships.turnins.data.length);
    const { participant } = enrollmentWithTurnins.relationships;

    assert.equal(findAll(`[data-student-id="${participant.data.id}"] .notes-list > ul li`).length, contractAssignmentsNotes.data.length, 'one enrollee has notes and matches fixture');
  });
});
