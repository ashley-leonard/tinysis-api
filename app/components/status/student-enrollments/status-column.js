import Component from '@ember/component';
import { computed } from '@ember/object';
import { not } from '@ember/object/computed';

import {
  getAcademicStatusName,
  attendanceStatusName,
  fteRequirementsStatusName,
  isUnacceptable,
  isMonthActiveForStatusReporting,
} from 'tinysis-ui/utils/status-utils';

export default Component.extend({
  tagName: '',

  statusIsMissing: not('status'),

  status: computed('statusHash', 'month', 'enrollment', function () {
    const { statusHash, month, enrollment } = this;
    const enrollmentStatuses = statusHash[enrollment.id];

    if (!enrollmentStatuses) {
      return null;
    }

    return enrollmentStatuses[month];
  }),

  statusIsUnacceptable: computed('status', function () {
    const { status } = this;

    if (!status) return false;

    return isUnacceptable(status);
  }),

  classIfMissingOrUnacceptable: computed('statusIsMissing', 'statusIsUnacceptable', function () {
    const { statusIsMissing, statusIsUnacceptable } = this;
    return (statusIsMissing || statusIsUnacceptable) ? 'red' : null;
  }),

  statusString: computed('status', function () {
    const { status, month, tinyData } = this;

    if (!status) {
      if (isMonthActiveForStatusReporting(month, tinyData.getToday())) {
        return '?';
      }
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
