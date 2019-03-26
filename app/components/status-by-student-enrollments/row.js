import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import ContractRelations from '../../mixins/contract-relations';
import EnrollmentRelations from '../../mixins/enrollment-relations';

// EnrollmentRelations takes precedence here in establishing relations
//
export default Component.extend(ContractRelations, EnrollmentRelations, {
  tinyData: service(),
  tagName: 'tbody',
  contract: computed('enrollment', function () {
    return this.tinyData.get('contract', this.enrollment.relationships.contract.data.id);
  }),
  notes: computed('notablesHash', function () {
    const { notablesHash, enrollment } = this;

    if (!(notablesHash && enrollment)) return null;

    return notablesHash[enrollment.id];
  }),
  columnsCount: computed('months', function () {
    return this.months.length + 2;
  }),
});
