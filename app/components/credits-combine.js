import Big from 'big.js';
import { schedule } from '@ember/runloop';
import { computed } from '@ember/object';
import TForm from './t-form';
import Validator from '../utils/validator';

export default TForm.extend({
  validator: computed(() => new Validator({
    'relationships.term': { type: 'required' },
    'relationships.credit': { type: 'required' },
  })),
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
        term: first.relationships.contractTerm,
        credit: first.relationships.credit,
        childCreditAssignments: {
          data: creditAssignments.map(ca => ({
            id: ca.id,
            type: ca.type,
          })),
        },
      },
    };

    this._super();
  },
  actions: {
    close() {
      this.close();
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
});
