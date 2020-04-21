import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'option',
  attributeBindings: ['value', 'selected'],
  value: null,
  selected: computed('value', 'currentValue', function () {
    const {
      value,
      currentValue,
    } = this;

    const isSelected = (currentValue && currentValue.toString()) === (value && value.toString());

    return isSelected;
  }),
});
