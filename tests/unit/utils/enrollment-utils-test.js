import { getEnrollmentStatusString } from 'tinysis-ui/utils/enrollment-utils';
import { module, test } from 'qunit';
import contractEnrollments from '../../fixtures/contract-enrollments';
import { clone } from '../../helpers/stub-tiny-data';

let enrollment;
module('Unit | Utility | enrollment-utils', (hooks) => {
  hooks.beforeEach(() => {
    enrollment = clone(contractEnrollments.data[0]);
  });

  test('it returns appropriate enrollment status strings', (assert) => {
    assert.matches(getEnrollmentStatusString(enrollment), 'Active');

    enrollment.attributes.enrollmentStatus = 'closed';
    enrollment.attributes.completionStatus = 'fulfilled';

    assert.matches(getEnrollmentStatusString(enrollment), 'Closed - fulfilled');

    enrollment.attributes.completionStatus = 'canceled';

    assert.matches(getEnrollmentStatusString(enrollment), 'Closed - canceled');
  });
});
