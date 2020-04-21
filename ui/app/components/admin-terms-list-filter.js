import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['form'],
  tagName: 'form',
  queryParams: {},

  onchange: () => {},

  statusOptions: computed(() => ([{
    name: 'Active',
    value: 'active',
  }, {
    name: 'Inactive',
    value: 'inactive',
  }])),

  schoolYearOptions: computed('schoolYears', function () {
    const options = [{
      name: 'Any school year',
      value: 'any',
    }];

    return options.concat(this.schoolYears
      .sort((y1, y2) => y2 - y1)
      .map(year => year.toString())
      .map(year => ({
        name: year.toString(),
        value: year.toString(),
      })));
  }),

  actions: {
    onSelect(value, name) {
      let overrides;

      switch (name) {
        case 'schoolYear':
          overrides = {
            status: '',
            name: '',
          };
          break;
        default:
          break;
      }

      return this.triggerOnChange(name, value, overrides);
    },
  },

  triggerOnChange(key, value, overrides = {}) {
    const { queryParams } = this;
    const updatedQueryParams = { ...queryParams, ...overrides };
    updatedQueryParams[key] = value;

    this.set('queryParams', updatedQueryParams);

    return this.onchange(updatedQueryParams);
  },

});
