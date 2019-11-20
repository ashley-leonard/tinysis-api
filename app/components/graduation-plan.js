import Component from '@ember/component';
import Big from 'big.js';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { createEntity, replaceModel } from '../utils/json-api';
import { getHours } from '../utils/credit-utils';

export default Component.extend({
  tinyData: service(),
  creditsAvailableToMap: computed('creditAssignments', function () {
    return this.creditAssignments
      .filter((creditAssignment) => {
        if (get(creditAssignment, 'relationships.parentCreditAssignment.data')) {
          return false;
        }
        const hours = getHours(creditAssignment);
        return hours > 0;
      });
  }),
  mappingsHash: computed('mappings', function () {
    const {
      tinyData,
      mappings,
    } = this;

    function createEntry(mapping = null) {
      return {
        sum: new Big(0),
        creditAssignments: [],
        mapping,
      };
    }

    return mappings
      .reduce((memo, mapping) => {
        const mappingRequirementId = get(mapping, 'relationships.graduationPlanRequirement.data.id');
        if (!mappingRequirementId) return memo;

        // create or update entry accumulator
        const entry = memo[mappingRequirementId] || createEntry(mapping);
        memo[mappingRequirementId] = entry;

        const creditAssignmentId = get(mapping, 'relationships.creditAssignment.data.id');

        // rest of this is credit-specific
        if (!creditAssignmentId) return memo;

        const creditAssignment = tinyData.get('creditAssignment', creditAssignmentId);

        entry.creditAssignments.push(creditAssignment);
        entry.sum = memo[mappingRequirementId].sum.plus(creditAssignment.attributes.creditHours);

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
        notes: null,
      }, requirement);
      this.setProperties({
        mappingToEdit,
        requirementToEdit: requirement,
      });
    },
    async saveMapping(mappingModel) {
      const result = await this.saveMapping(mappingModel);
      const mapping = result.data;
      this.toggleProperty('showDialog');
      this.set('mappings', replaceModel(this.mappings, mapping));
    },
    cancelDialog() {
      this.toggleProperty('showDialog');
    },
    onDrag(creditAssignment) {
      this.set('draggedCreditAssignment', creditAssignment);
    },
    async addMapping(requirement, creditAssignment) {
      const result = await this.addMapping(requirement, creditAssignment);

      // add the link
      const assignedCredit = {
        ...creditAssignment,
        relationships: {
          ...creditAssignment.relationships,
          graduationPlanMapping: result,
        },
      };

      // replace the ca
      const creditAssignments = replaceModel(this.creditAssignments, assignedCredit);

      this.setProperties({
        creditAssignments,
        mappings: this.mappings.concat([result.data]),
      });
    },
    async removeMapping(creditAssignment) {
      const mapping = creditAssignment.relationships.graduationPlanMapping.data;
      await this.removeMapping(mapping);

      // remove the link
      const unassigned = {
        ...creditAssignment,
        relationships: {
          ...creditAssignment.relationships,
          graduationPlanMapping: null,
        },
      };

      // replace the ca
      const creditAssignments = replaceModel(this.creditAssignments, unassigned);

      this.setProperties({
        creditAssignments,
        mappings: this.mappings.filter(m => m.id !== mapping.id),
      });
    },
  },
});
