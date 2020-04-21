import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: 'li',
  classNames: 'notes-list-item',
  creator: computed('note', function () {
    return this.tinyData.get('user', this.note.relationships.creator.data.id);
  }),
});
