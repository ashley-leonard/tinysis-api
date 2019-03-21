import Component from '@ember/component';
import { bool } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isMonthActiveForStatusReporting } from '../../../utils/status-utils';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  hasStatus: bool('status'),

  status: computed('statusHash', 'month', function () {
    return this.statusHash[this.month];
  }),

  isActiveMonth: computed('month', function () {
    return isMonthActiveForStatusReporting(this.month, this.tinyData.getToday());
  }),

  notes: computed('notesHash', function () {
    const { notesHash, status } = this;
    if (!(notesHash && status)) return null;

    return notesHash[status.id] || [];
  }),
});
