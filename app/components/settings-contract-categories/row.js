import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  name: computed('category.attributes.name', function () {
    return this.category.attributes.name || 'Untitled';
  }),
  reportingName: computed('category.attributes.reporting', function () {
    const { reporting } = this.category.attributes;
    switch (reporting) {
      case 'monthly':
        return 'Monthly';
      case 'end-of-term':
        return 'End of term';
      case 'none':
      default:
        return 'None';
    }
  }),
});
