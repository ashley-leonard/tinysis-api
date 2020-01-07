import Big from 'big.js';
import { schedule } from '@ember/runloop';
import CreditAssignmentsCreateEditDialog, {
  creditsRegex,
} from './create-edit-dialog';
import Validator from '../../utils/validator';

const validateRelationships = new Validator({
  contractTerm: { type: 'required' },
  credit: { type: 'required' },
});

// credits allow a number followed by an optional, constrained decimal fraction,
// or a decimal with no whole number
//
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

export default CreditAssignmentsCreateEditDialog.extend({
  validator,
  validateRelationships,
  didReceiveAttrs() {
    if (this.didInit) return this._super();

    const { creditAssignments, tinyData } = this;
    const creditHours = creditAssignments
      .reduce(
        (sum, ca) => sum.add(ca.attributes.creditHours),
        new Big(0)
      );

    const [firstCredit] = creditAssignments;
    const creditCandidate = tinyData.get('credit', firstCredit.relationships.credit.data.id);
    const termCandidate = tinyData.get('term', firstCredit.relationships.contractTerm.data.id);
    const defaultCredit = creditCandidate.attributes.status === 'active' ? { id: creditCandidate.id } : null;

    this.model = {
      attributes: {
        enableOverride: false,
        creditHours,
        creditsOverride: creditHours,
      },
      relationships: {
        contractTerm: { data: termCandidate.attributes.status === 'active' ? { id: termCandidate.id } : null },
        credit: { data: defaultCredit },
        childCreditAssignments: {
          data: creditAssignments.map(ca => ({
            id: ca.id,
            type: ca.type,
          })),
        },
      },
    };

    this.set('didInit', true);

    return this._super();
  },
  actions: {
    toggleOverride() {
      const enableOverride = !this.pojo.enableOverride;
      this.updatePojo({ enableOverride });

      if (enableOverride) {
        schedule('afterRender', this, function () {
          const element = this.element.querySelector('input[name="creditsOverride"]');
          element.focus();
        });
      }
    },
    updateTerm(term) {
      this.updateRelationship('contractTerm', term);
    },
  },
  serializeModel(pojo, _model, relationships) {
    const model = this._super(pojo, _model, relationships);
    if (!model.attributes.enableOverride) {
      delete model.attributes.creditsOverride;
    }
    delete model.attributes.enableOverride;
    return model;
  },
});
