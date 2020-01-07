import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  errorSummary: computed('error', function () {
    const { error } = this;

    if (!error) return null;

    const { body } = error;

    if (body) {
      if (body.message && body.error) {
        return `${body.message}: ${body.error}`;
      }

      if (body.message) return body.message;
    }

    if (error.message) return error.message;

    return this.defaultMessage || 'An error occurred';
  }),
  actions: {
    clear() {
      this.set('error', null);
    },
  },
});
