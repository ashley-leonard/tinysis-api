import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractAssignments from '../../../fixtures/contract-assignments';
import contractAssignmentsEnrollments from '../../../fixtures/contract-assignment-enrollments';
import contractAssignmentsNotes from '../../../fixtures/notes-contract-assignments';
import { generateNotableHash } from '../../../../utils/note-utils';

let tinyData;
let turnins;

module('Integration | Component | contracts/assignments-list-item', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractAssignments);
    tinyData.addResult(contractAssignmentsNotes);
    tinyData.addResult(contractAssignmentsEnrollments);

    this.enrollment = tinyData.get('enrollment').find(record => record.relationships.turnins.data.length > 0);
    this.student = tinyData.get('user', this.enrollment.relationships.participant.data.id);
    this.assignments = tinyData.get('assignment');

    turnins = tinyData.get('turnin');
    this.notablesHash = generateNotableHash(contractAssignmentsNotes, turnins, 'id');
  });

  function renderComponent() {
    return render(hbs`
      <table>
        {{contracts/assignments-list-item
          student=student
          enrollment=enrollment
          assignments=assignments
          notablesHash=notablesHash
          notesExpanded=true
        }}
      </table>
    `);
  }

  test('it renders with complete assignment', async (assert) => {
    const assignments = tinyData.get('assignment');

    await renderComponent();

    assert.ok(find('tbody'), 'component rendered');
    assert.equal(findAll('td.assignments-list-item-column').length, assignments.length, 'expected number of assignment columns rendered');

    const [turnin] = turnins;

    const statusSpan = find(`span[data-test-assignment-id="${turnin.relationships.assignment.data.id}"]`);
    assert.ok(statusSpan, 'a status element rendered');
    assert.equal(statusSpan.innerText.trim(), 'C', 'should be marked as complete');

    const notesTr = find('tr.notes-row');
    assert.ok(notesTr, 'notes row was rendered');

    const notesUl = find('tr.notes-row .notes-list > ul');
    assert.ok(notesUl, 'notes list was rendered');

    const notesLi = findAll('tr.notes-row .notes-list > ul li');

    assert.equal(contractAssignmentsNotes.data.length, notesLi.length, 'expected number of notes rendered');
  });

  test('it renders a missing assignment with turnin record', async (assert) => {
    const [turnin] = turnins;

    turnin.attributes.status = 'missing';

    tinyData.addRecord(turnin);

    await renderComponent();

    const statusSpan = find(`span[data-test-assignment-id="${turnin.relationships.assignment.data.id}"]`);

    assert.equal(statusSpan.innerText.trim(), '-', 'should be marked as missing');
  });

  test('it renders an enrollment record without turnins', async function (assert) {
    this.enrollment = tinyData.get('enrollment').find(record => record.relationships.turnins.data.length === 0);
    this.student = tinyData.get('user', this.enrollment.relationships.participant.data.id);

    await renderComponent();

    const statusSpan = find('td.assignments-list-item-column span');

    assert.equal(statusSpan.innerText.trim(), '-', 'should be marked as missing');
  });

  test('it renders an incomplete assignment', async (assert) => {
    const [turnin] = turnins;

    turnin.attributes.status = 'incomplete';

    tinyData.addRecord(turnin);

    await renderComponent();

    const statusSpan = find(`span[data-test-assignment-id="${turnin.relationships.assignment.data.id}"]`);
    assert.ok(statusSpan, 'a status element rendered');

    assert.equal(statusSpan.innerText.trim(), 'I', 'should be marked as incomplete');
  });
});
