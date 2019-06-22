import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['flex flex-row my-8 notice'],
  type: 'info',

  noticeTypeBackgroundColor: computed('type', function () {
    switch (this.type) {
      case 'info':
        return 'bg-green-500';
      case 'warn':
        return 'bg-red-500';
      case 'alert':
        return 'bg-orange-500';
      default:
        return 'bg-red-500';
    }
  }),

  noticeTypeColor: computed('type', function () {
    switch (this.type) {
      default:
        return 'text-white';
    }
  }),
});
