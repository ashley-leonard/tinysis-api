import Component from '@ember/component';

export default Component.extend({
  tagName: '',
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
