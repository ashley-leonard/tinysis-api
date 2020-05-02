import Component from '@ember/component';
import { computed } from '@ember/object';

const days = ['M', 'T', 'W', 'R', 'F'];

export default Component.extend({
  tagName: 'li',
  weekdays: computed('timeslot', function () {
    const { weekdays } = this.timeslot;
    return (weekdays || '').split('')
      .map(day => days[day])
      .join('/');
  }),
});
