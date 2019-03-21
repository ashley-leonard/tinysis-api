import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { wasActive } from 'tinysis-ui/utils/user-utils';
import { isUnacceptable, getAcademicStatusName } from 'tinysis-ui/utils/status-utils';

export default Component.extend({
  tinyData: service(),

  tagName: '',

  schoolYear: alias('term.attributes.schoolYear'),

  status: computed('month', 'enrollmentStatusHash', function () {
    const { month, enrollmentStatusHash } = this;

    return enrollmentStatusHash[month];
  }),

  isException: computed('showStatus', 'student', function () {
    const { showStatus, status } = this;

    if (!showStatus) return false;

    if (!status) return true;

    return isUnacceptable(status);
  }),

  warningClass: computed('isException', function () {
    const { isException } = this;
    return isException ? 'color-red' : null;
  }),

  statusAbbreviation: computed('status', function () {
    const { status } = this;
    if (!status) {
      return '?';
    }

    const { academicStatus, attendanceStatus } = status.attributes;
    const statusText = [];

    [academicStatus, attendanceStatus].forEach((attr) => {
      statusText.push(attr.charAt(0).toUpperCase());
    });

    return statusText.join(' ');
  }),

  showStatus: computed('month', 'student', function () {
    const today = this.tinyData.getToday();

    const { month, student } = this;

    if (today.isBefore(month)) return false;

    return wasActive(student, month);
  }),

  academicStatusName: computed('status', function () {
    const { status } = this;
    if (!(status && status.attributes.heldPeriodicCheckins)) {
      return '?';
    }

    return getAcademicStatusName(status);
  }),
});
