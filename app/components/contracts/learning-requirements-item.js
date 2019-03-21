import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  subordinate: computed('ealr', function () {
    return /\.\d+/.test(this.ealr.attributes.seq);
  }),
});
