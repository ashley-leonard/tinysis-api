import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  showMessage: computed('show', 'message', function () {
    const { show, message } = this;
    return Boolean(show && message);
  }),
});
