import Component from '@ember/component';
import Pikaday from 'pikaday';
import dayjs from 'dayjs';
import { Promise } from 'rsvp';
import { computed } from '@ember/object';

const dateFormat = 'M/D/YYYY';

export default Component.extend({
  disableDay: null,

  popup: false,

  onchange() {},

  fieldType: computed('popup', function () {
    if (this.popup) {
      return 'text';
    }
    return 'hidden';
  }),

  todayString: computed('value', function () {
    const { value } = this;

    return dayjs(value).format(dateFormat);
  }),

  async didInsertElement() {
    const {
      value,
      popup,
      element,
      dateSelected,
      disableDay,
    } = this;
    const [field] = element.getElementsByTagName('input');
    const defaultDate = this.getInitDate(value);

    this.pikaday = await new Promise((resolve) => {
      /* eslint-disable-next-line no-new */
      new Pikaday({
        field,
        container: popup ? null : element,
        defaultDate,
        setDefaultDate: true,
        onSelect: dateSelected.bind(this),
        bound: popup === true,
        disableDayFn: disableDay,
        showDaysInNextAndPreviousMonths: true,
        toString(date, format) { return dayjs(date).format(format); },
        format: dateFormat,

        // for testing purposes, so that an await click() will wait
        // for the picker to render. This is called by Pikaday and the
        // context is the picker. So this.pikaday becomes the picker.
        onOpen() {
          resolve(this);
        },
      });
    });
  },

  getInitDate(value) {
    const now = new Date();
    if (!value) return now;

    const date = dayjs(value).toDate();

    return date;
  },

  dateSelected(date) {
    this.onchange(dayjs(date).format('YYYY-MM-DD'), this.name);
  },
});
