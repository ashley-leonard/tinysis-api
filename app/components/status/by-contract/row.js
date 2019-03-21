import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import EnrollmentRelations from '../../../mixins/enrollment-relations';

export default Component.extend(EnrollmentRelations, {
  tinyData: service(),

  tagName: 'tbody',

  columnCount: computed('months', function () {
    return this.months.length + 2;
  }),

  enrollmentStatusHash: computed('statusHash', 'enrollment', function () {
    const { statusHash, enrollment } = this;

    return statusHash[enrollment.id] || {};
  }),

  loadingNotes: computed('notesHash', function () {
    if (this.notesHash) return null;

    return 'loading';
  }),

  notes: computed('enrollment', 'notesHash', function () {
    const { enrollment, notesHash } = this;
    if (!notesHash) return null;

    const notes = notesHash[enrollment.id] || [];

    return notes.sort((note1, note2) => note1.attributes.updatedAt.localeCompare(note2.attributes.updatedAt));
  }),
});
