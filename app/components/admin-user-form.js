import { computed, get } from '@ember/object';
import { equal, bool } from '@ember/object/computed';
import {
  roleTypes,
  ROLE_STUDENT,
  isStaffRole,
  STATUS_ACTIVE,
  STATUS_INACTIVE,
} from '../utils/user-utils';
import Validator from '../utils/validator';
import TForm from './t-form';

export default TForm.extend({
  roleOptions: roleTypes,
  classNames: ['w-full', 'lg:w-1/2', 'xl:w-1/3'],
  attributeBindings: ['autocomplete'],
  autocomplete: 'off',
  isActive: equal('pojo.status', 'active'),
  isExistingUser: bool('model.id'),
  isStudent: equal('pojo.role', ROLE_STUDENT),
  isStaff: computed('pojo.role', function () {
    const role = this.get('pojo.role');
    return isStaffRole(role);
  }),

  coordinatorOptions: computed('staff', function () {
    return this.staff
      .map(staff => ({
        id: staff.id,
        name: `${staff.attributes.lastName}, ${staff.attributes.firstName}`,
      }));
  }),

  grades: computed(() => ([
    { name: 'Freshman', value: '9' },
    { name: 'Sophomore', value: '10' },
    { name: 'Junior', value: '11' },
    { name: 'Senior', value: '12' },
  ])),

  validator: computed('isStudent', function () {
    const { isStudent } = this;

    // dateInactive must be present if isActive is false
    // dateInactive must >= dateInactive
    let validationsHash = {
      dateInactive: [{
        type: 'required',
        if: (key, value, pojo) => pojo.status === STATUS_INACTIVE,
        message: 'Inactive date is required if user is inactive',
      }, {
        type: 'valid',
        if: (key, value, pojo) => pojo.dateInactive,
        isValid: (key, value, pojo) => value >= pojo.dateActive,
        message: 'Inactive date should be later than active date',
      }, {
        type: 'valid',
        if: (key, value) => Boolean(value),
        isValid: (key, value, pojo) => pojo.status === STATUS_ACTIVE,
        message: 'Inactive date should not be filled out for an active user',
      }],
    };

    const requiredForAll = [
      'dateActive',
      'status',
      'firstName',
      'lastName',
      'role',
    ];

    const requiredForStaff = [
      'email',
    ];

    const requiredForStudents = [
      'districtId',
      'districtGrade',
      'coordinatorId',
    ];

    let requiredKeys = requiredForAll;
    if (isStudent) {
      requiredKeys = requiredKeys.concat(requiredForStudents);
    } else {
      requiredKeys = requiredKeys.concat(requiredForStaff);
    }

    validationsHash = requiredKeys.reduce((memo, key) => {
      memo[key] = { type: 'required' };
      return memo;
    }, validationsHash);

    return new Validator(validationsHash);
  }),

  actions: {
    handleCoordinatorChange(coordinatorId) {
      this.updatePojo({ coordinatorId });
    },
  },

  normalizeModel(model) {
    const pojo = this._super(model);
    const coordinatorId = get(model, 'relationships.coordinator.data.id');

    if (coordinatorId) {
      pojo.coordinatorId = coordinatorId;
    }

    return pojo;
  },

  serializeModel(pojo, model) {
    const outbound = this._super(pojo, model);

    delete outbound.attributes.coordinatorId;

    if (pojo.coordinatorId) {
      outbound.relationships = {
        coordinator: {
          data: {
            id: pojo.coordinatorId,
            type: 'user',
          },
        },
      };
    }

    return outbound;
  },
});
