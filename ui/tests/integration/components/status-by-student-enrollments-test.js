import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';

import { stubTinyData } from '../../helpers/stub-tiny-data';

import student from '../../fixtures/student';
import coorTerms from '../../fixtures/coor-terms';
import studentEnrollments from '../../fixtures/student-enrollments';
import studentEnrollmentStatuses from '../../fixtures/student-enrollments-statuses';
import notesStudentEnrollmentStatuses from '../../fixtures/notes-student-enrollment-statuses';

let tinyDataServiceMock;
let enrollment;

module('Integration | Component | status-by-student-enrollments', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(student);
    tinyDataServiceMock.addResult(coorTerms);
    tinyDataServiceMock.addResult(notesStudentEnrollmentStatuses);
    tinyDataServiceMock.addResult(studentEnrollments);
    tinyDataServiceMock.addResult(studentEnrollmentStatuses);

    this.getNotes = () => resolve(notesStudentEnrollmentStatuses);

    this.term = tinyDataServiceMock.get('term', coorTerms.data[0].id);
    this.statuses = tinyDataServiceMock.get('status');
    this.student = tinyDataServiceMock.get('user', student.data.id);
    this.enrollments = tinyDataServiceMock.get('enrollment');

    [enrollment] = this.enrollments;
  });

  test('it renders with three current status months on October 15, 2019', async function (assert) {
    tinyDataServiceMock.setToday(new Date(2019, 9, 15));

    await render(hbs`
      {{status-by-student-enrollments
        student=student
        enrollments=enrollments
        enrollmentStatuses=statuses
        term=term
        getNotes=getNotes
      }}
    `);

    const rows = findAll('tbody');

    assert.equal(rows.length, this.enrollments.length, 'expected number of enrollments rendered');
    assert.equal(findAll('.notes-list').length, 2, 'expected count of populated notes rows rendered');

    const enrollmentRow = find(`[data-test-enrollment-id="${enrollment.id}"`);
    assert.ok(enrollmentRow, 'enrollment row was found');
    assert.equal(enrollmentRow.querySelectorAll('[data-test-status-is-missing]').length, 0, 'there are no missing status columns');
  });

  test('it renders with three current status months and one pending status month on December 15, 2019', async function (assert) {
    tinyDataServiceMock.setToday(new Date(2019, 11, 15));

    await render(hbs`
      {{status-by-student-enrollments
        student=student
        enrollments=enrollments
        enrollmentStatuses=statuses
        term=term
        getNotes=getNotes
      }}
    `);

    const rows = findAll('tbody');
    assert.equal(rows.length, this.enrollments.length, 'expected number of enrollments rendered');

    const enrollmentRow = find(`[data-test-enrollment-id="${enrollment.id}"`);
    assert.ok(enrollmentRow, 'enrollment row was found');
    assert.equal(enrollmentRow.querySelectorAll('[data-test-status-is-missing]').length, 1, 'there is one missing status column');
  });
});
