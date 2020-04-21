import Component from '@ember/component';
import { inject } from '@ember/service';
import { computed } from '@ember/object';
import ContractRelations from '../mixins/contract-relations';

export default Component.extend(ContractRelations, {
  tinyData: inject(),

  classNames: ['contract-detail'],

  detailSections: computed('contract', function () {
    const { contract } = this;
    return ['learningObjectives', 'competencies', 'evaluationMethods', 'instructionalMaterials']
      .map(section => ({
        name: section,
        contents: contract.attributes[section],
      }));
  }),

  hasDetails: computed('detailSections', function () {
    return this.detailSections.any(section => section.content && section.content.trim());
  }),
});
