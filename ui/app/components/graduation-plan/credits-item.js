import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import CreditAssignmentItem from '../credit-assignments/item';

export default CreditAssignmentItem.extend({
  tinyData: service(),
  credit: computed('creditAssignment', function () {
    const creditId = this.get('creditAssignment.relationships.credit.data.id');
    if (creditId) {
      return this.tinyData.get('credit', creditId);
    }

    return { attributes: { name: this.creditAssignment.attributes.creditCourseName } };
  }),
  actions: {
    onDragStart(event) {
      event.dataTransfer.effectAllowed = 'move';
      this.onDrag(this.creditAssignment);
    },
  },
});
