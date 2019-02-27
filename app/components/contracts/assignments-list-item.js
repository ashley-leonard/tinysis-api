import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tinyData: service(),
  tagName: 'tbody',
  classNames: 'assignments-list-item',
  attributeBindings: 'studentId:data-student-id',

  studentId: alias('student.id'),

  turnins: computed('enrollment', function () {
    const {
      enrollment,
      tinyData,
    } = this;

    return enrollment
      .relationships
      .turnins
      .data
      .map(turninRelation => tinyData.get('turnin', turninRelation.id));
  }),

  /*
   * returns a hash of turnins indexed by assignment ID
   */
  turninsHashedByAssignment: computed('turnins', function () {
    return this.turnins
      .reduce((memo, turnin) => {
        memo[turnin.relationships.assignment.data.id] = turnin;
        return memo;
      }, {});
  }),

  loadingNotes: computed('notablesHash', function () {
    const { notablesHash } = this;

    if (notablesHash) return null;

    return 'loading';
  }),

  /*
   * returns an array of notes for this enrollment. these are augmented
   * with a note.attributes.title indicating the assignment.
   */
  notes: computed('turnins', 'notablesHash', function () {
    const {
      notablesHash,
      turnins,
      tinyData,
    } = this;

    if (!notablesHash) return null;

    const notesForEnrollment = turnins
      .map(turnin => notablesHash[turnin.id] || [])
      .flatten()
      .sort((note1, note2) => note1.attributes.updatedAt.localeCompare(note2.attributes.updatedAt));

    return notesForEnrollment
      .map((note) => {
        const turninForNote = tinyData.get('turnin', note.relationships.notable.data.id);
        const assignmentForNote = tinyData.get('assignment', turninForNote.relationships.assignment.data.id);
        const title = assignmentForNote.attributes.name;
        return {
          ...note,
          attributes: {
            ...note.attributes,
            title,
          },
        };
      });
  }),
});
