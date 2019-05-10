import { computed, get } from '@ember/object';
import { equal } from '@ember/object/computed';
import { roleTypes, ROLE_STUDENT } from '../utils/user-utils';
import Validator from '../utils/validator';
import TForm from './t-form';

export default TForm.extend({
  roleOptions: roleTypes,
  classNames: 'w-full lg:w-1/2 xl:w-1/3',

  isStudent: equal('pojo.role', ROLE_STUDENT),

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
        if: (key, value, pojo) => !pojo.isActive,
        message: 'Date enrollment ended is required if user is inactive',
      }, {
        type: 'valid',
        if: (key, value, pojo) => !pojo.isActive,
        isValid: (key, value, pojo) => value >= pojo.dateActive,
        message: 'Date enrollment ended should be later than date first enrolled',
      }],
    };

    const requiredForAll = [
      'dateActive',
      'isActive',
      'firstName',
      'lastName',
      'role',
    ];

    const requiredForStaff = [
      'login',
      'email',
      'canLogin',
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
            type: 'staff',
          },
        },
      };
    }

    return outbound;
  },
});
