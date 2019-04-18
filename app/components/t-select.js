import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  tagName: 'select',
  optionValuePath: 'value',
  optionNamePath: 'name',
  attributeBindings: ['name'],
  onchange: () => {},

  /**
   * Builds the options list with initial selection.
   * Does not list value as a dependency. Internal selection
   * changes are handled by the native control. So we don't
   * recompute this on value changes.
   */
  optionSelections: computed('options', 'optionValuePath', 'optionNamePath', function () {
    const {
      options,
      optionValuePath,
      optionNamePath,
    } = this;

    return options
      .map((option) => {
        let opt;
        if (typeof option !== 'object') {
          opt = {
            name: option,
            value: option,
          };
        } else {
          opt = {
            name: get(option, optionNamePath),
            value: get(option, optionValuePath),
          };
        }

        return opt;
      });
  }),

  change(event) {
    const select = event.target;
    const { name } = select;
    const [option] = select.selectedOptions;
    const value = option && option.value;

    this.onchange(value, name, event);
  },
});
