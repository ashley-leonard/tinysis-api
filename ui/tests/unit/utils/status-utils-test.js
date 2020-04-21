import { getAcademicStatusName, isUnacceptable, isMonthActiveForStatusReporting } from 'tinysis-ui/utils/status-utils';
import { module, test } from 'qunit';
import dayjs from 'dayjs';
import coorStatusFixtures from '../../fixtures/coor-statuses';
import studentEnrollmentsStatuses from '../../fixtures/student-enrollments-statuses';
import { clone } from '../../helpers/test-utils';

let coorStatus;
let enrollmentStatus;

module('Unit | Utility | status-utils', (hooks) => {
  hooks.beforeEach(() => {
    coorStatus = clone(coorStatusFixtures.data[0]);
    enrollmentStatus = clone(studentEnrollmentsStatuses.data[0]);
  });

  test('getAcademicStatusName functions acceptably', (assert) => {
    assert.equal('satisfactory', coorStatus.attributes.academicStatus, 'fixture has expected acceptable status');

    assert.equal('Satisfactory', getAcademicStatusName(coorStatus), 'expected status name of Satisfactory');

    coorStatus.attributes.academicStatus = 'unsatisfactory';

    assert.equal('Unsatisfactory', getAcademicStatusName(coorStatus), 'expected status of Unsatisfactory');
  });

  test('isUnacceptable functions acceptably for coor status', (assert) => {
    assert.notOk(isUnacceptable(coorStatus), 'expect an acceptable status');

    coorStatus.attributes.academicStatus = 'unsatisfactory';
    assert.ok(isUnacceptable(coorStatus), 'expect an unacceptable status');
  });

  test('isUnacceptable functions acceptably for enrollment status', (assert) => {
    assert.notOk(isUnacceptable(enrollmentStatus), 'expect an acceptable status');

    enrollmentStatus.attributes.academicStatus = 'unsatisfactory';
    assert.ok(isUnacceptable(enrollmentStatus), 'expect an unacceptable status');
  });

  test('isMonthActiveForStatusReporting reports accurately', (assert) => {
    const reportsFalse = dayjs('2001-02-12');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsFalse), false, 'the next month is not yet active for coorStatus reporting');

    let reportsTrue = dayjs('2001-03-12');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsTrue), true, 'the middle of the current month is active for coorStatus reporting');

    reportsTrue = dayjs('2001-03-01');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsTrue), true, 'the first day of the current month is active for coorStatus reporting');
  });
});
