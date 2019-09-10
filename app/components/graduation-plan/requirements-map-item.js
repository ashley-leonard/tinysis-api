import Component from '@ember/component';
import Big from 'big.js';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { equal } from '@ember/object/computed';

export default Component.extend({
  tinyData: service(),
  tagName: '',
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

    return this.requirementHash.sum.toFixed();
  }),
  requirementHash: computed('mappingsHash', 'requirement', function () {
    const {
      mappingsHash,
      requirement,
    } = this;
    console.log('rebuilding requirementHash');
    return mappingsHash[requirement.id] || { creditAssignments: [], sum: new Big(0) };
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
        requirementHash,
        requirement,
      } = this;
      const { mapping } = requirementHash;
      this.editMapping(mapping, requirement);
    },
    removeMapping(creditAssignment) {
      this.removeMapping(creditAssignment);
    },
    onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.addMapping(this.requirement, this.draggedCreditAssignment);
    },
    onDragEnter(event) {
      event.preventDefault();
    },
    onDragOver(event) {
      event.preventDefault();
    },
  },
});
