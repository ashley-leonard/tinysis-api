import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { deepClone } from '../../../helpers/test-utils';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import coorStaff from '../../../fixtures/all-coor-staff';
import coorStatus from '../../../fixtures/all-coor-statuses';
import coorStudents from '../../../fixtures/all-coor-students';
import coorTerms from '../../../fixtures/coor-terms';

const [term] = coorTerms.data;
let tinyDataServiceMock;

module('Integration | Component | status/all-coordinators', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();
    tinyDataServiceMock.addResult(coorStudents);

    this.setProperties({
      coordinators: deepClone(coorStaff),
      students: deepClone(coorStudents),
      term: deepClone(term),
      statuses: deepClone(coorStatus),
    });
  });

  test('it renders expected markup with two staff on 9/15/2019', async function (assert) {
    tinyDataServiceMock.setToday(new Date(2019, 8, 15));

    await render(hbs`
      {{status/all-coordinators
        coordinators=coordinators
        students=students
        term=term
        statuses=statuses
      }}
    `);

    const cols = findAll('thead th.m-head');
    assert.equal(cols.length, term.attributes.months.length, 'expected number of month columns were rendered');

    const rows = findAll('tbody tr');
    assert.equal(rows.length, coorStaff.data.length, 'expected number of staff rows were rendered');

    const [coor1] = coorStaff.data;
    const coorRow = find(`tr[data-test-coordinator-id="${coor1.id}"]`);

    assert.ok(coorRow, 'expected coordinator row was rendered');

    const coorColumns = findAll(`tr[data-test-coordinator-id="${coor1.id}"] td`);
    assert.equal(coorColumns.length, term.attributes.months.length + 1, 'expected number of columns rendered');

    const coorActiveColumns = findAll(`tr[data-test-coordinator-id="${coor1.id}"] td.active`);
    assert.equal(coorActiveColumns.length, 1, 'expected number of active columns rendered');

    const coorActiveColumn = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active`);
    assert.ok(coorActiveColumn, 'active column selection successful');

    const coorActiveLink = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active a`);
    assert.equal(coorActiveLink.title, 'Complete', 'expected title rendered for active');
    assert.equal(coorActiveLink.text.trim(), 'C', 'first month is marked as complete');

    const [firstMonth] = this.get('term').attributes.months;

    // drop the first status month for coor1
    //
    const statuses = this.get('statuses');
    const filteredData = statuses.data.filter(status => status.month !== firstMonth && status.coordinatorId === coor1.id);

    this.set('statuses', Object.assign({}, statuses, {
      data: filteredData,
    }));

    const coorActiveIncompleteLink = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active a`);
    assert.equal(coorActiveIncompleteLink.title, 'Incomplete', 'expected title rendered for active');
    assert.equal(coorActiveIncompleteLink.text.trim(), 'I', 'first month is now marked as complete');
  });


  test('it renders expected markup with two staff on 12/15/2019', async (assert) => {
    tinyDataServiceMock.setToday(new Date(2019, 11, 15));

    await render(hbs`
      {{status/all-coordinators
        coordinators=coordinators
        students=students
        term=term
        statuses=statuses
      }}
    `);

    const cols = findAll('thead th.m-head');
    assert.equal(cols.length, term.attributes.months.length, 'expected number of month columns were rendered');

    const rows = findAll('tbody tr');
    assert.equal(rows.length, coorStaff.data.length, 'expected number of staff rows were rendered');

    const [coor1] = coorStaff.data;
    const coorRow = find(`tr[data-test-coordinator-id="${coor1.id}"]`);

    assert.ok(coorRow, 'expected coordinator row was rendered');

    const coorColumns = findAll(`tr[data-test-coordinator-id="${coor1.id}"] td`);
    assert.equal(coorColumns.length, term.attributes.months.length + 1, 'expected number of columns rendered');

    const coorActiveColumns = findAll(`tr[data-test-coordinator-id="${coor1.id}"] td.active`);
    assert.equal(coorActiveColumns.length, 4, 'expected number of active columns rendered');

    const coorActiveColumn = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active`);
    assert.ok(coorActiveColumn, 'active column selection successful');

    const coorActiveLink = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active a`);
    assert.equal(coorActiveLink.title, 'Complete', 'expected title rendered for active');
    assert.equal(coorActiveLink.text.trim(), 'C', 'first month is marked as complete');

    const coorActiveIncompleteColumns = findAll(`tr[data-test-coordinator-id="${coor1.id}"] td.active.incomplete`);
    assert.equal(coorActiveIncompleteColumns.length, 2, 'expected number of active, incomplete columns rendered');

    const coorActiveInvalidLink = find(`tr[data-test-coordinator-id="${coor1.id}"] td.active.incomplete a`);
    assert.equal(coorActiveInvalidLink.title, 'Incomplete', 'expected title rendered for active incomplete');
    assert.equal(coorActiveInvalidLink.text.trim(), 'I', 'month is marked as incomplete');
  });
});
