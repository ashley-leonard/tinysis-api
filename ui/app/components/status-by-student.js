import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { activeMonths } from 'tinysis-ui/utils/status-utils';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';

export default Component.extend({
  tinyData: service(),
  tagName: 'table',
  classNames: ['t-table', 't-table-bordered'],

  months: computed('term', function () {
    const active = activeMonths(this.term, this.tinyData.getToday());

    return active.sort();
  }),
  statusHash: computed('statuses', function () {
    const { statuses } = this;

    return statuses
      .reduce((memo, status) => {
        memo[status.attributes.month] = status;
        return memo;
      }, {});
  }),
  async didReceiveAttrs() {
    const { getNotes, notableHash, statuses } = this;
    if (notableHash) return;

    this.set('loadingNotes', 'loading');
    const notes = await getNotes(statuses);

    this.setProperties({
      notablesHash: generateNotableHash(notes, statuses, 'id'),
      loadingNotes: null,
    });
  },
});
