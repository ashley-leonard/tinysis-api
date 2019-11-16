import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import CreditAssignmentPropsMixin from '../../mixins/credit-assignment-props';

export default Component.extend(CreditAssignmentPropsMixin, {
  tinyData: service(),
  tagName: '',
  selected: false,

  showApproveForTransmittal: computed('creditAssignment', () => true),

  selectionDisabled: computed('disabled', 'hasChildren', function () {
    if (this.disabled) {
      return true;
    }

    return this.hasChildren;
  }),

  showSplit: computed('hasChildren', function () {
    return this.hasChildren;
  }),

  notes: computed('creditAssignment', function () {
    const { tinyData } = this;
    const refs = this.get('creditAssignment.relationships.notes.data') || [];

    return refs.map(ref => tinyData.get('note', ref.id));
  }),

  actions: {
    approveCredit() {
      this.approveCredit(this.creditAssignment);
    },
    splitCredit() {
      this.splitCredit(this.creditAssignment);
    },
    selectCredit() {
      if (this.selectionDisabled) return;
      this.toggleProperty('selected');
      this.selectCredit(this.creditAssignment, this.selected);
    },
  },
});
