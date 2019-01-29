import Component from '@ember/component';
import { computed } from '@ember/object';
import { academicStatusName } from 'tinysis-ui/utils/status-utils';

export default Component.extend({
  tagName: 'tbody',
  status: computed('month', 'statusHash', function () {
    const { month, statusHash } = this;

    return statusHash[month];
  }),
  academic: computed('status', function () {
    const { status } = this;
    if (!status) return '';

    return academicStatusName(status);
  }),
  heldPeriodicCheckins: computed('status', function () {
    const { status } = this;
    if (!status) return '';

    if (status.attributes.heldPeriodicCheckins) {
      return 'Y';
    }

    return 'N';
  }),
  notes: computed('notablesHash', function () {
    const { notablesHash, status } = this;
    if (!(notablesHash && status)) return null;

    return notablesHash[status.id];
  }),
});
