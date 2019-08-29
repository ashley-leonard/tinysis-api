import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  filteredRequirements: computed('requirements', 'requirementType', 'showChildren', function () {
    const {
      requirements,
      requirementType,
      showChildren,
    } = this;

    return requirements
      .filter(req => req.attributes.requirementType === requirementType && (showChildren || !req.relationships.parent.data))
      .sort((req1, req2) => req1.attributes.position - req2.attributes.position);
  }),
});
