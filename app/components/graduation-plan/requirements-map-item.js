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

    return mappingsHash[requirement.id] || { creditAssignments: [], sum: new Big(0) };
  }),
  childRequirements: computed('requirement.relationships.children.data', function () {
    const children = this.get('requirement.relationships.children.data');
    if (!(children && children.length)) return null;

    const { tinyData } = this;

    return children.map(child => tinyData.get('graduationPlanRequirement', child.id));
  }),
  hasChildren: computed('requirement', function () {
    return Boolean(this.get('requirement.relationships.children.data.length'));
  }),
  isDropTarget: computed('isCredit', 'hasChildren', function () {
    return this.isCredit && !this.hasChildren;
  }),
  isDropTargetClass: computed('isDropTarget', function () {
    if (this.isDropTarget) return 'only-drop-target';
    return null;
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
      if (!this.isDropTarget) return;
      event.preventDefault();
      event.stopPropagation();
      this.set('dragStateClass', null);
      this.addMapping(this.requirement, this.draggedCreditAssignment);
    },
    onDragEnter(event) {
      if (!this.isDropTarget) return;
      event.preventDefault();

      this.set('dragStateClass', 'only-drop-target');
    },
    onDragOver(event) {
      if (!this.isDropTarget) return;

      event.preventDefault();
    },
    onDragLeave() {
      if (!this.isDropTarget) return;

      this.set('dragStateClass', null);
    },
  },
});
