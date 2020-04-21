import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import TForm from '../t-form';
import Validator from '../../utils/validator';

// credits allow a number followed by an optional, constrained decimal fraction,
// or a decimal with no whole number
//
export const creditsRegex = /(^\d+(\.(75|5|25))?$)|(^\.(75|5|25)$)/;
const validateAttributes = new Validator({
  creditHours: {
    type: 'format',
    regex: creditsRegex,
    message: 'Invalid credit value - please override with a value having a 0.25 multiple',
  },
});
const validateRelationships = new Validator({
  credit: { type: 'required' },
});

// Credit is required
// Denormalized contract term is required if assgned to user
//
export default TForm.extend({
  tinyData: service(),
  creditAssignment: service(),
  classNames: ['w-128'],
  validator: validateAttributes,
  validateRelationships,
  didReceiveAttrs() {
    const { model } = this;
    const creditId = get(model, 'relationships.credit.data.id');
    if (creditId) {
      const credit = this.tinyData.get('credit', creditId);
      this.creditResult = [{ value: credit.id, name: credit.attributes.courseName }];
    }

    this._super();
  },
  actions: {
    close() {
      this.close();
    },
    onChangeCredit(id) {
      this.updateRelationship('credit', id, {
        type: 'credit',
      });
    },
    async searchCredits(search) {
      const credits = await this.creditAssignment.searchCredits({ search });
      return credits.data.map(c => ({
        name: c.attributes.courseName,
        value: c.id,
      }));
    },
  },
  validate() {
    const {
      relationships,
      validateRelationships: validator,
    } = this;

    const attributesResult = this._super();

    const relationshipsResult = validator.validate(relationships);

    const result = {
      isInvalid: attributesResult.isInvalid || relationshipsResult.isInvalid,
      errors: {
        ...relationshipsResult.errors,
        ...attributesResult.errors,
      },
    };

    this.setProperties(result);
  },
});
