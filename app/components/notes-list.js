import Component from '@ember/component';
import { computed } from '@ember/object';
import { bool, alias } from '@ember/object/computed';
import { log } from '../utils/logger';

export default Component.extend({
  classNames: 'notes-list',
  classNameBindings: ['expanded'],
  hasNotes: bool('count'),
  count: alias('notes.length'),
  pluralNotes: computed('notes', function () {
    const { notes } = this;
    return notes && (notes.length === 1) ? 'note' : 'notes';
  }),
  sortedNotes: computed('notes', function () {
    const { notes } = this;
    return (notes || [])
      .sort((note1, note2) => note1.attributes.updatedAt.localeCompare(note2.attributes.updatedAt));
  }),

  notesIcons: computed('notes', function () {
    return this.notes.slice(0, 5);
  }),

  actions: {
    doExpand(event) {
      event.preventDefault();
      this.setExpanded();
    },
    doAdd(event) {
      event.preventDefault();
      log('do add');
    },
  },

  setExpanded(expanded) {
    if (expanded === undefined) {
      this.toggleProperty('expanded');
      return;
    }

    this.set('expanded', expanded);
  },
});
