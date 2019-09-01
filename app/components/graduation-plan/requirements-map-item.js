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
  mapping: alias('requirementHash.mapping'),
  isCredit: equal('requirement.attributes.requirementType', 'credit'),
  showSum: computed('isCredit', 'sum', function () {
    const {
      isCredit,
      sum,
    } = this;

    return sum && isCredit;
  }),
  sum: computed('requirementHash.sum', function () {
    if (this.requirementHash.sum.eq(0)) return null;

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
    editMapping() {
      const {
        mapping,
        requirement,
      } = this;
      this.editMapping(mapping, requirement);
    },
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
