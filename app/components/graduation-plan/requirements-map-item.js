import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: 'req-map-item',
  creditAssignments: computed('creditsHash', 'requirement', function () {
    const {
      creditsHash,
      requirement,
    } = this;
    return creditsHash[requirement.id] || [];
  }),
  actions: {
    removeMapping(creditAssignment) {
      this.removeMapping(creditAssignment);
    },
  },
  dragEnter(event) {
    event.preventDefault();
  },
  dragOver(event) {
    event.preventDefault();
  },
  drop(event) {
    event.preventDefault();
    this.addMapping(this.requirement, this.draggedCreditAssignment);
  },
});
