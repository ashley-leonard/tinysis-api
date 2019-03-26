import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import ContractRelations from '../mixins/contract-relations';
import { hashByStatusableIdAndMonth } from '../utils/status-utils';
import { generateNotableHash } from '../utils/note-utils';

export default Component.extend(ContractRelations, {
  tagName: 'table',
  classNames: ['pure-table', 'pure-table-bordered'],

  months: alias('term.attributes.months'),

  statusHash: computed('statuses', function () {
    const { statuses } = this;

    return hashByStatusableIdAndMonth(statuses);
  }),

  didReceiveAttrs() {
    const { statuses, notesHash } = this;
    if (notesHash) {
      return;
    }

    // hashed by enrollment id, for the rows.
    //
    this.getNotes(statuses)
      .then((notesResult) => {
        const hash = generateNotableHash(notesResult, statuses, 'relationships.statusable.data.id');
        this.setProperties({
          notesHash: hash,
        });
      });
  },
});
