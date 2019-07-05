import Component from '@ember/component';
import { computed }  from '@ember/object';

export default Component.extend({
  tagName: '',
  name: computed('category.attributes.name', function () {
    return this.category.attributes.name || 'Untitled';
  })
});
