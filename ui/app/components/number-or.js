import Component from '@ember/component';
import { computed } from '@ember/object';

const NumberOr = Component.extend({
  or: '-',
  renderedNumber: computed('number', function () {
    const { number } = this;
    if (Number.isFinite(number) && number > 0) {
      return number;
    }

    return this.or;
  }),
});

NumberOr.reopenClass({
  positionalParams: ['number', 'or'],
});

export default NumberOr;
