import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { capitalize } from '../helpers/titleize';

export default Component.extend({
  tagName: '',
  optionValuePath: 'value',
  optionNamePath: 'name',
  onchange: () => {},

  /**
   * Builds the options list with initial selection.
   * Does not list value as a dependency. Internal selection
   * changes are handled by the native control. So we don't
   * recompute this on value changes.
   */
  optionSelections: computed('optionsList', 'optionValuePath', 'optionNamePath', function () {
    const {
      optionsList,
      optionValuePath,
      optionNamePath,
    } = this;

    return optionsList
      .map((option) => {
        let opt;
        if (typeof option !== 'object') {
          opt = {
            name: capitalize(option),
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

  actions: {
    onChange(event) {
      const select = event.target;
      const { name } = select;
      const [option] = select.selectedOptions;
      const value = option && option.value;

      this.onchange(value, name, event);
    },
  },
});
