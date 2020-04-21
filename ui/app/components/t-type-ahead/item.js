import Component from '@ember/component';
import { computed } from '@ember/object';
import { debounce } from '@ember/runloop';

export default Component.extend({
  tagName: '',
  onMouseOver() {},
  onClick() {},
  isSelected: computed('index', 'selection', function () {
    const {
      index,
      selection,
    } = this;
    return index === selection;
  }),
  actions: {
    doClick() {
      this.onClick();
    },
    doMouseOver() {
      this.doMouseOver();
    },
  },
  doMouseOver() {
    debounce(this, this.onMouseOver, 50);
  },
});
