import Component from '@ember/component';
import { computed } from '@ember/object';
import {
  getAcademicStatusName,
  attendanceStatusName,
  fteRequirementsStatusName,
} from 'tinysis-ui/utils/status-utils';

export default Component.extend({
  tagName: 'td',
  status: computed('statusHash', 'month', 'enrollment', function () {
    const { statusHash, month, enrollment } = this;
    const enrollmentStatuses = statusHash[enrollment.id];

    if (!enrollmentStatuses) {
      return null;
    }

    const status = enrollmentStatuses[month];
    if (!status) {
      return null;
    }

    const statusAbbreviation = [
      getAcademicStatusName(status),
      attendanceStatusName(status),
      fteRequirementsStatusName(status),
    ];

    return statusAbbreviation
      .map(statusName => statusName.substr(0, 1))
      .join(' ');
  }),
});
