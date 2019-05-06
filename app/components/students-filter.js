import Component from '@ember/component';
import { computed } from '@ember/object';
import { capitalize } from '../helpers/titleize';
import {
  ROLE_STUDENT,
  ROLE_STAFF,
  ROLE_ADMIN,
} from '../utils/user-utils';

export default Component.extend({
  tagName: 'form',

  classNames: 'form',

  onQuery: () => {},

  queryParams: computed(() => {}),

  grades: computed(() => ([
    { name: 'Freshmen', value: '9' },
    { name: 'Sophomores', value: '10' },
    { name: 'Juniors', value: '11' },
    { name: 'Seniors', value: '12' },
  ])),

  isStaff: computed('queryParams.role', function () {
    return this.queryParams.role && (this.queryParams.role !== ROLE_STUDENT);
  }),

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

  roleOptions: computed(() => ([
    ROLE_STUDENT,
    ROLE_STAFF,
    ROLE_ADMIN,
  ].map(role => ({
    name: capitalize(role),
    value: role,
  })))),

  statusOptions: computed(() => ([
    { name: 'Active', value: true },
    { name: 'Inactive', value: false },
  ])),

  schoolYearsReversed: computed('schoolYears', function () {
    return this.schoolYears.sort((y1, y2) => y2 - y1);
  }),

  actions: {
    inputChange(event) {
      const { target } = event;
      const { value } = target;
      this.triggerOnChange('name', value);
    },

    onSelect(value, name) {
      let overrides;

      switch (name) {
        case 'schoolYear':
        case 'role':
          overrides = {
            status: '',
            coordinator: '',
            grade: '',
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
