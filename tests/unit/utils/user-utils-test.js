import { wasActive } from 'tinysis-ui/utils/user-utils';
import { module, test } from 'qunit';
import moment from 'moment';
import { deepClone } from '../../helpers/test-utils';
import students from '../../fixtures/coor-students';

module('Unit | Utility | user-utils', () => {
  test('wasActive yields accurate results', (assert) => {
    const student = deepClone(students.data[0]);

    // ensure active
    //
    student.attributes.status = 'active';

    let result = wasActive(student, student.attributes.dateActive);

    assert.ok(result, 'active student is shown active on their first active day');

    let inactiveDate = moment(student.attributes.dateActive).subtract(1, 'month').format('YYYY-MM-DD');
    result = wasActive(student, inactiveDate);
    assert.notOk(result, `active student with active date of ${student.attributes.dateActive} is shown inactive on ${inactiveDate}`);

    let activeDate = moment(student.attributes.dateActive).add(1, 'day').format('YYYY-MM-DD');
    result = wasActive(student, activeDate);
    assert.ok(result, `active student with active date of ${student.attributes.dateActive} is shown active on ${activeDate}`);

    student.attributes.status = 'inactive';
    student.attributes.dateInactive = moment(student.attributes.dateActive).add(1, 'year').format('YYYY-MM-DD');

    result = wasActive(student, student.attributes.dateActive);
    assert.ok(result, `inactive student with dates of ${student.attributes.dateActive} - ${student.attributes.dateInactive} is shown active on their first active day`);

    activeDate = moment(student.attributes.dateActive).add(5, 'day').format('YYYY-MM-DD');
    result = wasActive(student, activeDate);
    assert.ok(result, `inactive student with dates of ${student.attributes.dateActive} - ${student.attributes.dateInactive} is shown active on ${activeDate}`);

    inactiveDate = moment(student.attributes.dateActive).subtract(1, 'month').format('YYYY-MM-DD');
    result = wasActive(student, inactiveDate);
    assert.notOk(result, `inactive student with dates of ${student.attributes.dateActive} - ${student.attributes.dateInactive} is shown inactive on ${inactiveDate}`);

    inactiveDate = moment(student.attributes.dateInactive).add(1, 'month').format('YYYY-MM-DD');
    result = wasActive(student, inactiveDate);
    assert.notOk(result, `inactive student with dates of ${student.attributes.dateActive} - ${student.attributes.dateInactive} is shown inactive on ${inactiveDate}`);
  });
});
