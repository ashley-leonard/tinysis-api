import Big from 'big.js';
import { schedule } from '@ember/runloop';
import { computed } from '@ember/object';
import TForm from './t-form';
import clone from '../utils/clone';
import Validator from '../utils/validator';

const validateRelationships = new Validator({
  contractTerm: { type: 'required' },
  credit: { type: 'required' },
});

// credits allow a number followed by an optional, constrained decimal fraction,
// or a decimal with no whole number
//
const creditsRegex = /(^\d+(\.(75|5|25))?$)|(^\.(75|5|25)$)/;
const validator = new Validator({
  creditHours: {
    type: 'format',
    regex: creditsRegex,
    message: 'Invalid credit value - please override with a value having a 0.25 multiple',
    if: (key, value, pojo) => !pojo.enableOverride,
  },
  creditsOverride: {
    type: 'format',
    regex: creditsRegex,
    message: 'Invalid credit override value',
    if: (key, value, pojo) => pojo.enableOverride,
  },
});

export default TForm.extend({
  validator,
  creditOptions: computed('availableCredits', function () {
    const { availableCredits } = this;
    return availableCredits.map(credit => ({
      name: credit.attributes.courseName,
      value: credit.id,
    }));
  }),
  didReceiveAttrs() {
    const { creditAssignments } = this;
    const creditHours = creditAssignments
      .reduce(
        (sum, ca) => sum.add(ca.attributes.creditHours),
        new Big(0)
      );

    const [first] = creditAssignments;

    this.model = {
      attributes: {
        enableOverride: false,
        creditHours,
        creditsOverride: creditHours,
        creditId: first.relationships.credit.data.id,
      },
      relationships: {
        contractTerm: clone(first.relationships.contractTerm),
        credit: clone(first.relationships.credit),
        childCreditAssignments: {
          data: creditAssignments.map(ca => ({
            id: ca.id,
            type: ca.type,
          })),
        },
      },
    };

    this.relationships = clone(this.model.relationships);

    this._super();
  },
  actions: {
    close() {
      this.close();
    },
    updateRelationship(attrKey, type, value) {
      let newValue;
      if (value) {
        newValue = {
          id: value,
          type,
        };
      } else {
        newValue = null;
      }
      const newRelationships = {
        ...this.relationships,
        [attrKey]: newValue,
      };

      this.set('relationships', newRelationships);
      this.validate();
    },
    toggleOverride() {
      const enableOverride = !this.pojo.enableOverride;
      if (enableOverride) {
        schedule('afterRender', this, function () {
          const element = this.element.querySelector('input[name="creditsOverride"]');
          element.focus();
        });
      }
      this.updatePojo({ enableOverride });
    },
  },
  validate() {
    const { relationships } = this;

    const attributesResult = this._super();

    const relationshipsResult = validateRelationships.validate(relationships);

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
