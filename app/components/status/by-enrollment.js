import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ContractRelations from '../../mixins/contract-relations';
import { activeMonths, hashByMonth } from '../../utils/status-utils';
import { generateNotableHash } from '../../utils/note-utils';

export default Component.extend(ContractRelations, {
  tinyData: service(),

  tagName: 'table',
  classNames: ['pure-table', 'pure-table-bordered'],

  months: computed('term', 'statuses', function () {
    return activeMonths(this.term, this.tinyData.getToday()).sort();
  }),

  statusHash: computed('statuses', function () {
    return hashByMonth(this.statuses);
  }),

  async didReceiveAttrs() {
    const { statuses, notesHash, getNotes } = this;

    if (notesHash) return;

    this.set('loadingNotes', true);

    const result = await getNotes(statuses);
    this.set('notesHash', generateNotableHash(result, statuses, 'id'));
  },
});
