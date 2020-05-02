import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias, and } from '@ember/object/computed';
import { wasActive } from '../../utils/user-utils';
import { isUnacceptable, getAcademicStatusName } from '../../utils/status-utils';

export default Component.extend({
  tinyData: service(),

  tagName: '',

  schoolYear: alias('term.attributes.schoolYear'),

  hasStatus: and('status.id', 'showStatus'),

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
      case 'satisfactory':
        statusText.push('A');
        break;
      case 'unsatisfactory':
        statusText.push('U');
        break;
      case 'participating':
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

    return getAcademicStatusName(status);
  }),
});
