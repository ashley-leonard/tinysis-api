import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  classNames: ['flex', 'flex-row'],
  creditsHash: computed('creditAssignments', function () {
    const {
      creditAssignments,
      tinyData,
    } = this;

    return creditAssignments
      .reduce((memo, creditAssignment) => {
        const mappingId = get(creditAssignment, 'relationships.graduationPlanMapping.data.id');
        if (mappingId) {
          const mapping = tinyData.get('graduationPlanMapping', mappingId);
          const mappingRequirementId = get(mapping, 'relationships.graduationPlanRequirement.data.id');
          if (mappingRequirementId) {
            memo[mappingRequirementId] = memo[mappingRequirementId] || [];
            memo[mappingRequirementId].push(creditAssignment);
          }
        }
        return memo;
      }, {});
  }),
  actions: {
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
