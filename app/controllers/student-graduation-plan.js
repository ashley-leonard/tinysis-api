import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { createEntity } from '../utils/json-api';

export default Controller.extend({
  tinyData: service(),
  activeRequirements: computed('requirements', function () {
    return this.requirements.filter(req => req.attributes.status === 'active');
  }),
  actions: {
    addMapping(requirement, creditAssignment) {
      const { student } = this;
      return this.tinyData.fetch(`/api/graduation-plan-mappings/${student.id}`, {
        method: 'POST',
        body: JSON.stringify({
          data: createEntity('graduationPlanMapping', {}, requirement, creditAssignment),
        }),
      });
    },
    removeMapping(mapping) {
      const { student } = this;
      return this.tinyData.fetch(`/api/graduation-plan-mappings/${student.id}/${mapping.id}`, {
        method: 'DELETE',
      });
    },
    onDragStart(creditAssignment) {
      this.set('draggedItem', creditAssignment);
    },
  },
});
