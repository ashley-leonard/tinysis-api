import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'form',
  onQuery: () => {},

  queryParams: computed(() => {}),

  grades: computed(() => ([
    { name: 'Freshmen', value: '9' },
    { name: 'Sophomores', value: '10' },
    { name: 'Juniors', value: '11' },
    { name: 'Seniors', value: '12' },
  ])),

  termsPrompt: computed('queryParams.schoolYear', function () {
    const schoolYear = this.get('queryParams.schoolYear');
    return `All ${schoolYear} contracts`;
  }),

  coordinatorOptions: computed('coordinators', function () {
    return this.coordinators
      .map(coordinator => ({
        id: coordinator.id,
        name: `${coordinator.attributes.lastName}, ${coordinator.attributes.firstName}`,
      }));
  }),

  schoolYearOptions: computed('schoolYears', function () {
    return [{
      name: 'Any year',
      value: 'any',
    }]
      .concat(this.schoolYears.map(year => ({ name: year, value: year })));
  }),

  actions: {
    onInput(value) {
      this.triggerOnChange('name', value);
    },

    onSelect(value, name) {
      let overrides;

      switch (name) {
        case 'schoolYear':
          overrides = {
            term: '',
            status: '',
          };
          break;
        default:
          break;
      }

      return this.triggerOnChange(name, value, overrides);
    },
  },

  submit(event) {
    event.preventDefault();
  },

  triggerOnChange(key, value, overrides = {}) {
    const { queryParams } = this;
    const updatedQueryParams = { ...queryParams, ...overrides };
    updatedQueryParams[key] = value;

    this.set('queryParams', updatedQueryParams);

    return this.onQuery(updatedQueryParams);
  },

});
