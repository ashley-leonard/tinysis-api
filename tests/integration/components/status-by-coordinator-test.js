import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import coorStatus from '../../fixtures/coor-statuses';
import coorStudents from '../../fixtures/coor-students';
import coorTerms from '../../fixtures/coor-terms';

const [term] = coorTerms.data;
let tinyDataServiceMock;

module('Integration | Component | status-by-coordinator', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();
    tinyDataServiceMock.addResult(coorStatus);
    tinyDataServiceMock.addResult(coorStudents);
    tinyDataServiceMock.addResult(coorTerms);

    const props = {
      students: tinyDataServiceMock.get('user').filter(user => user.attributes.role === 'student'),
      term: tinyDataServiceMock.get('term', term.id),
      statuses: tinyDataServiceMock.get('status'),
    };

    this.setProperties(props);
  });

  test('it renders expected markup with two students on 9/15/2019', async (assert) => {
    tinyDataServiceMock.setToday(new Date(2019, 8, 15));

    await render(hbs`{{status-by-coordinator students=students term=term statuses=statuses}}`);

    const cols = findAll('thead th[data-test-term-month]');
    assert.equal(cols.length, term.attributes.months.length, 'expected number of month columns were rendered');

    const rows = findAll('tbody tr');
    assert.equal(rows.length, coorStudents.data.length, 'expected number of student rows were rendered');

    const activeStudent = coorStudents.data.find(student => student.attributes.isActive);
    const activeStudentStati = coorStatus.data.filter(status => status.relationships.statusable.data.id === activeStudent.id);
    const activeStudentStatiCels = findAll(`tbody tr[data-test-student-id="${activeStudent.id}"] td[data-test-has-status]`);
    const activeStudentExceptionCels = findAll(`tbody tr[data-test-student-id="${activeStudent.id}"] td.status-cel-exception`);

    assert.equal(activeStudentStatiCels.length, activeStudentStati.filter(status => status.attributes.month < '2019-09-15').length, 'expected number of status cels were rendered for active student');
    assert.equal(activeStudentExceptionCels.length, 0, 'expect all status reporting caught up for active student');

    const inactiveStudent = coorStudents.data.find(student => !student.attributes.isActive);
    const inactiveStudentStati = coorStatus.data.filter(status => status.relationships.statusable.data.id === inactiveStudent.id);
    const inactiveStudentStatiCels = findAll(`tbody tr[data-test-student-id="${inactiveStudent.id}"] td[data-test-has-status]`);
    const inactiveStudentExceptionCels = findAll(`tbody tr[data-test-student-id="${inactiveStudent.id}"] td.status-cel-exception`);

    assert.equal(inactiveStudentStatiCels.length, inactiveStudentStati.filter(status => status.attributes.month < '2019-09-15').length, 'expected number of status cels were rendered for inactive student');
    assert.equal(inactiveStudentExceptionCels.length, 0, 'expect all status reporting caught up for inactive student');
  });

  test('it renders expected markup with two students on 12/15/2019', async (assert) => {
    tinyDataServiceMock.setToday(new Date(2019, 11, 15));

    await render(hbs`{{status-by-coordinator students=students term=term statuses=statuses}}`);

    const cols = findAll('thead th[data-test-term-month]');
    assert.equal(cols.length, term.attributes.months.length, 'expected number of month columns were rendered');

    const rows = findAll('tbody tr');
    assert.equal(rows.length, coorStudents.data.length, 'expected number of student rows were rendered');

    const activeStudent = coorStudents.data.find(student => student.attributes.isActive);
    const activeStudentStati = coorStatus.data.filter(status => status.relationships.statusable.data.id === activeStudent.id);
    const activeStudentStatiCels = findAll(`tbody tr[data-test-student-id="${activeStudent.id}"] td[data-test-has-status]`);
    const activeStudentExceptionCels = findAll(`tbody tr[data-test-student-id="${activeStudent.id}"] td[data-test-has-exception]`);

    assert.equal(activeStudentStatiCels.length, activeStudentStati.filter(status => status.attributes.month < '2019-12-15').length, 'expected number of status cels were rendered for active student');
    assert.equal(activeStudentExceptionCels.length, 2, 'expected two exception cels for active student; it is Dec and Nov/Dec reports are missing');

    const inactiveStudent = coorStudents.data.find(student => !student.attributes.isActive);
    const inactiveStudentStati = coorStatus.data.filter(status => status.relationships.statusable.data.id === activeStudent.id);
    const inactiveStudentStatiCels = findAll(`tbody tr[data-test-student-id="${inactiveStudent.id}"] td[data-test-has-status]`);
    const inactiveStudentExceptionCels = findAll(`tbody tr[data-test-student-id="${inactiveStudent.id}"] td.status-cel-exception`);

    assert.equal(inactiveStudentStatiCels.length, inactiveStudentStati.filter(status => status.attributes.month < '2019-12-15').length, 'expected number of status cels were rendered for inactive student');
    assert.equal(inactiveStudentExceptionCels.length, 0, 'no exception cels were rendered for inactive student; was inactive as of Nov report');
  });
});
