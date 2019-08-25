import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  filteredRequirements: computed('requirements', 'requirementType', function () {
    const {
      requirements,
      requirementType,
    } = this;

    return requirements
      .filter(req => req.attributes.requirementType === requirementType && !req.relationships.parent.data);
  }),
});
