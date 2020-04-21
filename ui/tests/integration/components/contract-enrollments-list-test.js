import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import contractEnrollments from '../../fixtures/contract-enrollments';
import contractEnrollmentsNotes from '../../fixtures/notes-contract-enrollments';

let tinyData;

module('Integration | Component | contract-enrollments-list', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractEnrollments);
    tinyData.addResult(contractEnrollmentsNotes);

    this.enrollments = contractEnrollments.data;
    this.getNotes = () => resolve(contractEnrollmentsNotes);
  });

  test('it renders with enrollments and notes', async function (assert) {
    await render(hbs`
      {{contract-enrollments-list
        enrollments=enrollments
        getNotes=getNotes
      }}
    `);

    assert.equal(findAll('tbody tr').length, contractEnrollments.data.length, 'expected number of tbodies rendered');

    const [enrollment] = this.enrollments;
    const notes = contractEnrollmentsNotes.data.filter(note => note.relationships.notable.data.id === enrollment.id);

    const enrollmentRow = find(`tbody tr[data-test-enrollment-id="${enrollment.id}"]`);
    assert.ok(enrollmentRow, 'the row for the first enrollment rendered');
    assert.ok(enrollmentRow.querySelector('.notes-list'), 'notes list rendered in this row');
    assert.equal(notes.length, enrollmentRow.querySelectorAll('.notes-list li').length, 'expected count of notes were rendered');
  });
});
