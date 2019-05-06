import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  hasErrorToShow: computed('error', 'showError', function () {
    return Boolean(this.error && this.showError);
  }),
});
