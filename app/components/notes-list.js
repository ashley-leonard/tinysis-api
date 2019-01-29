import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'ul',
  classNames: 'notes-list',
  sortedNotes: computed('notes', function () {
    const { notes } = this;
    return (notes || []).sort((note1, note2) => note1.attributes.updatedAt.localeCompare(note2.attributes.updatedAt));
  }),
});
