import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'w-1/4 my-2',
  checked: computed('month', 'months', function () {
    const {
      month,
      months,
    } = this;

    return months.includes(month);
  }),
  click() {
    this.onclick(this.month);
    return false;
  },
});
