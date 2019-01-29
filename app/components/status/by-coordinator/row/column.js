import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias, and } from '@ember/object/computed';
import { wasActive } from 'tinysis-ui/utils/user-utils';
import { isUnacceptable, academicStatusName } from 'tinysis-ui/utils/status-utils';

export default Component.extend({
  tinyData: service(),

  classNames: ['status-cel', 'status-cel-coor'],
  classNameBindings: ['isException:status-cel-exception'],

  tagName: 'td',

  'data-test-status-id': alias('status.id'),
  'data-test-has-status': and('showStatus', 'status.id'),

  schoolYear: alias('term.attributes.schoolYear'),

  status: computed('month', 'studentHash', function () {
    const { month, studentHash } = this;

    return studentHash[month];
  }),

  isException: computed('showStatus', 'student', function () {
    const { showStatus, status } = this;

    if (!showStatus) return false;

    if (!status) return true;

    if (!status.attributes.heldPeriodicCheckins) return true;

    return isUnacceptable(status);
  }),

  statusAbbreviation: computed('status', function () {
    const statusAttributes = this.get('status.attributes') || {};
    const { academicStatus, fteHours } = statusAttributes;
    const statusText = [];
    let showHours = true;

    switch (academicStatus) {
      case 0:
        statusText.push('A');
        break;
      case 1:
        statusText.push('U');
        break;
      case 2:
        statusText.push('P');
        break;
      default:
        statusText.push('?');
        showHours = false;
        break;
    }

    if (showHours) statusText.push(fteHours);

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

    return academicStatusName(status);
  }),
});
