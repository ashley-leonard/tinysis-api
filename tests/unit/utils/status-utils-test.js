import { getAcademicStatusName, isUnacceptable, isMonthActiveForStatusReporting } from 'tinysis-ui/utils/status-utils';
import { module, test } from 'qunit';
import dayjs from 'dayjs';
import coorStatusFixtures from '../../fixtures/coor-statuses';
import { clone } from '../../helpers/stub-tiny-data';

let status;

module('Unit | Utility | status-utils', (hooks) => {
  hooks.beforeEach(() => {
    status = clone(coorStatusFixtures.data[0]);
  });

  test('getAcademicStatusName functions acceptably', (assert) => {
    assert.equal('satisfactory', status.attributes.academicStatus, 'fixture has expected acceptable status');

    assert.equal('Satisfactory', getAcademicStatusName(status), 'expected status name of Satisfactory');

    status.attributes.academicStatus = 'unsatisfactory';

    assert.equal('Unsatisfactory', getAcademicStatusName(status), 'expected status of Unsatisfactory');
  });

  test('isUnacceptable functions acceptably', (assert) => {
    assert.notOk(isUnacceptable(status), 'expect an acceptable status');

    status.attributes.academicStatus = 'unsatisfactory';
    assert.ok(isUnacceptable(status), 'expect an unacceptable status');
  });

  test('isMonthActiveForStatusReporting reports accurately', (assert) => {
    const reportsFalse = dayjs('2001-02-12');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsFalse), false, 'the next month is not yet active for status reporting');

    let reportsTrue = dayjs('2001-03-12');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsTrue), true, 'the middle of the current month is active for status reporting');

    reportsTrue = dayjs('2001-03-01');
    assert.equal(isMonthActiveForStatusReporting('2001-03-01', reportsTrue), true, 'the first day of the current month is active for status reporting');
  });
});
