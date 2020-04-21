import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  enabled: computed('disabled', function () {
    return !this.disabled;
  }),
  actions: {
    async onClick(event) {
      const {
        action,
        disabled,
      } = this;
      event.preventDefault();

      if (disabled) return;
      if (!action) return;

      this.set('loading', true);

      await action();

      if (!this.isDestroyed) this.set('loading', false);
    },
  },
});
