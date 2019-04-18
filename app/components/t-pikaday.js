import Component from '@ember/component';
import Pikaday from 'pikaday';
import dayjs from 'dayjs';
import { computed } from '@ember/object';

const dateFormat = 'M/D/YYYY';

export default Component.extend({
  fieldType: 'hidden',

  disableDay: null,

  onchange() {},

  todayString: computed('value', function () {
    const { value } = this;

    return dayjs(value).format(dateFormat);
  }),

  didInsertElement() {
    const [field] = this.element.getElementsByTagName('input');
    this.pikaday = new Pikaday({
      field,
      container: this.element,
      defaultDate: this.today,
      setDefaultDate: true,
      onSelect: this.dateSelected.bind(this),
      bound: false,
      disableDayFn: this.disableDay,
      showDaysInNextAndPreviousMonths: true,
      toString(date, format) { return dayjs(date).format(format); },
      format: dateFormat,
    });
  },

  dateSelected(date) {
    this.onchange(dayjs(date).format('YYYY-MM-DD'), this.name);
  },
});
