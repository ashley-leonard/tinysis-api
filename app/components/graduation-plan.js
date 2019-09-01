import Component from '@ember/component';
import Big from 'big.js';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { createEntity } from '../utils/json-api';

export default Component.extend({
  tinyData: service(),
  classNames: ['flex', 'flex-row', 'border-red-600', 'border'],
  creditsHash: computed('creditAssignments', function () {
    const {
      creditAssignments,
      tinyData,
    } = this;

    function createEntry() {
      return {
        sum: new Big(0),
        creditAssignments: [],
        mapping: null,
      };
    }

    return creditAssignments
      .reduce((memo, creditAssignment) => {
        const mappingId = get(creditAssignment, 'relationships.graduationPlanMapping.data.id');
        if (!mappingId) return memo;

        const mapping = tinyData.get('graduationPlanMapping', mappingId);
        const mappingRequirementId = get(mapping, 'relationships.graduationPlanRequirement.data.id');
        if (!mappingRequirementId) return memo;

        // create or update entry accumulator
        const entry = memo[mappingRequirementId] || createEntry();
        memo[mappingRequirementId] = entry;

        entry.creditAssignments.push(creditAssignment);
        entry.sum = memo[mappingRequirementId].sum.plus(creditAssignment.attributes.creditHours);
        entry.mapping = mapping;

        // create or update parent accumulator
        const requirement = tinyData.get('graduationPlanRequirement', mappingRequirementId);
        const parentId = get(requirement, 'relationships.parent.data.id');

        if (parentId) {
          memo[parentId] = memo[parentId] || createEntry();
          memo[parentId].sum = memo[parentId].sum.plus(creditAssignment.attributes.creditHours);
        }

        return memo;
      }, {});
  }),
  actions: {
    editMapping(mapping, requirement) {
      this.toggleProperty('showDialog');
      const mappingToEdit = mapping || createEntity('graduationPlanMapping', {
        dateCompleted: null,
        note: null,
      }, requirement);
      this.setProperties({
        mappingToEdit,
      });
    },
    saveMapping(mapping) {
      return this.saveMapping(mapping);
    },
    onDrag(creditAssignment) {
      this.set('draggedCreditAssignment', creditAssignment);
    },
    async addMapping(requirement, creditAssignment) {
      const graduationPlanMapping = await this.addMapping(requirement, creditAssignment);

      // add the link
      const assignedCredit = {
        ...creditAssignment,
        relationships: {
          ...creditAssignment.relationships,
          graduationPlanMapping,
        },
      };

      // replace the ca
      const { id } = creditAssignment;
      const creditAssignments = this.creditAssignments.filter(ca => ca.id !== id);
      creditAssignments.push(assignedCredit);

      this.set('creditAssignments', creditAssignments);

      this.set('mappings', this.mappings.concat([graduationPlanMapping]));
    },
    removeMapping(creditAssignment) {
      const { id } = creditAssignment;

      // remove the link
      const unassigned = {
        ...creditAssignment,
        relationships: {
          ...creditAssignment.relationships,
          graduationPlanMapping: null,
        },
      };

      // replace the ca
      const creditAssignments = this.creditAssignments.filter(ca => ca.id !== id);
      creditAssignments.push(unassigned);

      this.set('creditAssignments', creditAssignments);

      this.removeMapping(creditAssignment.relationships.graduationPlanMapping.data);
    },
  },
});
