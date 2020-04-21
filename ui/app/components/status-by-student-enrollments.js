/*
{{status-by-student-enrollments
  student=student
  enrollments=enrollments
  enrollmentStatuses=enrollmentStatuses
  term=term
}}
*/

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { activeMonths } from '../utils/status-utils';
import { generateNotableHash } from '../utils/note-utils';

export default Component.extend({
  tinyData: service(),

  tagName: 'table',
  classNames: ['t-table', 't-table-bordered'],

  enrollmentsList: computed('enrollments', function () {
    const { enrollments, tinyData } = this;

    return enrollments
      .sort((enrollment1, enrollment2) => {
        const contract1 = tinyData.get('contract', enrollment1.relationships.contract.data.id);
        const contract2 = tinyData.get('contract', enrollment2.relationships.contract.data.id);

        return contract1.attributes.name.localeCompare(contract2.attributes.name);
      });
  }),

  statusHash: computed('enrollmentStatuses', function () {
    const { enrollmentStatuses } = this;

    return enrollmentStatuses.reduce((memo, status) => {
      const enrollmentId = status.relationships.statusable.data.id;
      const statuses = memo[enrollmentId] || {};
      statuses[status.attributes.month] = status;
      memo[enrollmentId] = statuses;
      return memo;
    }, {});
  }),

  months: computed('term', 'enrollment', function () {
    return activeMonths(this.term, this.tinyData.getToday());
  }),

  async didReceiveAttrs() {
    const { getNotes, notableHash, enrollmentStatuses } = this;
    if (notableHash) return;

    this.set('loadingNotes', 'loading');
    const notes = await getNotes(enrollmentStatuses);

    this.setProperties({
      notablesHash: generateNotableHash(notes, enrollmentStatuses, 'relationships.statusable.data.id'),
      loadingNotes: null,
    });
  },
});
