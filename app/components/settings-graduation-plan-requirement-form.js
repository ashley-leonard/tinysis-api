import { computed, get } from '@ember/object';
import Validator from '../utils/validator';
import TForm from './t-form';

export default TForm.extend({
  classNames: ['w-full', 'lg:w-1/2', 'xl:w-1/3'],
  validator: computed(() => {
    const validationsHash = {
      name: [{
        type: 'required',
      }],
    };

    return new Validator(validationsHash);
  }),
  parentOptions: computed('graduationPlanRequirements', function () {
    const { graduationPlanRequirements, model } = this;
    return graduationPlanRequirements
      .filter(req => !get(req, 'relationships.parent.data.id'))
      .filter(req => req.id !== model.id)
      .map(req => ({
        name: req.attributes.name,
        value: req.id,
      }))
      .sort((r1, r2) => r1.name.localeCompare(r2.name));
  }),
  statusOptions: computed(() => ([
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ])),
  requirementTypeOptions: computed(() => ([
    { name: 'Credit', value: 'credit' },
    { name: 'Service', value: 'service' },
    { name: 'General', value: 'general' },
  ])),
  didReceiveAttrs() {
    this._super();

    if (this.didInit) return;

    this.set('parentId', this.get('model.relationships.parent.data.id'));
    this.didInit = true;
  },
  serializeModel(pojo, model) {
    const requirement = this._super(pojo, model);
    const { parentId } = this;
    delete requirement.attributes.parent;

    if (parentId) {
      requirement.relationships = {
        parent: {
          data: {
            id: parentId,
          },
        },
      };
    } else {
      requirement.relationships = {
        parent: null,
      };
    }

    return requirement;
  },
});
