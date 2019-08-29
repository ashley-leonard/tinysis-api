import Component from '@ember/component';
import Big from 'big.js';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias, equal } from '@ember/object/computed';

export default Component.extend({
  tinyData: service(),
  tagName: 'li',
  classNames: 'req-map-item',
  creditAssignments: alias('requirementHash.creditAssignments'),
  isCreditItem: equal('requirement.attributes.requirementType', 'credit'),
  sum: computed('requirementHash.sum', function () {
    return this.requirementHash.sum.toPrecision(2);
  }),
  requirementHash: computed('creditsHash', 'requirement', function () {
    const {
      creditsHash,
      requirement,
    } = this;
    return creditsHash[requirement.id] || { creditAssignments: [], sum: new Big(0) };
  }),
  childRequirements: computed('requirement.relationships.children.data', function () {
    const children = this.get('requirement.relationships.children.data');
    if (!(children && children.length)) return null;

    const { tinyData } = this;

    return children.map(child => tinyData.get('graduationPlanRequirement', child.id));
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
    event.stopPropagation();
    this.addMapping(this.requirement, this.draggedCreditAssignment);
  },
});
