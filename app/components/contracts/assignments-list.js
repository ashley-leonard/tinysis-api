import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { compareUsers } from '../../utils/user-utils';
import { generateNotableHash } from '../../utils/note-utils';

export default Component.extend({
  tinyData: service(),
  tagName: 'table',
  classNames: ['pure-table', 'pure-table-border', 'pure-table-collapsed', 'assignments-list'],
  participants: computed('enrollments', function () {
    const { enrollments, tinyData } = this;

    return enrollments
      .map(enrollment => ({
        enrollment,
        student: tinyData.get('user', enrollment.relationships.participant.data.id),
      }))
      .sort((e1, e2) => compareUsers(e1.student, e2.student));
  }),
  sortedAssignments: computed('assignments', function () {
    const { assignments } = this;
    return assignments
      .sort((a1, a2) => a1.attributes.dueDate.localeCompare(a2.attributes.dueDate));
  }),
  async didReceiveAttrs() {
    const {
      notablesHash,
      getNotes,
      enrollments,
      tinyData,
    } = this;
    if (notablesHash) return;

    const turnins = enrollments
      .map(enrollment => enrollment.relationships.turnins.data)
      .flatten()
      .map(turninRel => tinyData.get('turnin', turninRel.id));

    this.set('loadingNotes', 'loading');
    const notes = await getNotes(turnins);

    this.setProperties({
      notablesHash: generateNotableHash(notes, turnins, 'id'),
      loadingNotes: null,
    });
  },
});
