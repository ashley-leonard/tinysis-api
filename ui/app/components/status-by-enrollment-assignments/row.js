import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isAssignmentDue } from '../../utils/assignment-utils';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  notes: computed('notesHash', function () {
    const { notesHash, turnin } = this;
    if (!(notesHash && turnin)) return null;
    return notesHash[turnin.id];
  }),
  turnin: computed('turninsByAssignment', 'assignment', function () {
    const { turninsByAssignment, assignment } = this;
    return turninsByAssignment[assignment.id];
  }),
  status: computed('turnin', function () {
    const { tinyData, turnin, assignment } = this;
    const isDue = isAssignmentDue(assignment, tinyData.getToday());
    const status = (turnin && turnin.attributes.status) || 'missing';

    switch (status) {
      case 'missing':
        if (isDue) {
          return status;
        }
        return null;
      default:
        return status;
    }
  }),
});
