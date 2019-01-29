import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['filter'],
  tagName: 'ul',
  queryParams: {},

  onchange: () => {},

  statuses: computed(() => ['Active', 'Closed', 'Proposed']),

  termsPrompt: computed('queryParams.schoolYear', function () {
    const schoolYear = this.get('queryParams.schoolYear');
    return `All ${schoolYear} contracts`;
  }),

  facilitatorOptions: computed('facilitators', function () {
    return this.facilitators
      .map(facilitator => ({
        id: facilitator.id,
        name: `${facilitator.attributes.lastName}, ${facilitator.attributes.firstName}`,
      }));
  }),

  actions: {
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
  triggerOnChange(key, value, overrides = {}) {
    const { queryParams } = this;
    const updatedQueryParams = { ...queryParams, ...overrides };
    updatedQueryParams[key] = value;

    this.set('queryParams', updatedQueryParams);

    return this.onchange(updatedQueryParams);
  },

});
