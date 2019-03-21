import Component from '@ember/component';
import { computed } from '@ember/object';
import EnrollmentRelations from '../../mixins/enrollment-relations';
import ContractRelations from '../../mixins/contract-relations';
import { generateNotableHash } from '../../utils/note-utils';

export default Component.extend(ContractRelations, EnrollmentRelations, {
  tagName: 'table',
  classNames: ['pure-table', 'pure-table-bordered'],
  sortedAssignments: computed('assignments', function () {
    return this.assignments.sort((a1, a2) => a1.attributes.dueDate.localeCompare(a2.attributes.dueDate));
  }),
  turninsByAssignment: computed('turnins', function () {
    const { turnins } = this;

    return turnins
      .reduce((memo, turnin) => {
        memo[turnin.relationships.assignment.data.id] = turnin;
        return memo;
      }, {});
  }),
  async didReceiveAttrs() {
    const { notesHash, getNotes, turnins } = this;
    if (notesHash) return;

    const result = await getNotes(turnins);
    this.set('notesHash', generateNotableHash(result, turnins, 'relationships.assignment.data.id'));
  },
});
