import Component from '@ember/component';
import { generateNotableHash } from 'tinysis-ui/utils/note-utils';

export default Component.extend({
  tagName: 'table',
  classNames: ['t-table', 't-table-bordered'],
  async didReceiveAttrs() {
    const { notablesHash, getNotes, enrollments } = this;
    if (notablesHash) return;

    this.set('loadingNotes', true);
    const notes = await getNotes();
    this.setProperties({
      notablesHash: generateNotableHash(notes, enrollments, 'id'),
      loadingNotes: false,
    });
  },
});
