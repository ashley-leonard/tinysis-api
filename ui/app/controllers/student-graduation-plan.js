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
        data: {
          data: createEntity('graduationPlanMapping', {}, requirement, creditAssignment),
        },
      });
    },
    saveMapping(mapping) {
      const { student } = this;
      let url;
      let method;
      if (mapping.id) {
        url = `/api/graduation-plan-mappings/${student.id}/${mapping.id}`;
        method = 'PUT';
      } else {
        url = `/api/graduation-plan-mappings/${student.id}`;
        method = 'POST';
      }
      return this.tinyData.fetch(url, {
        method,
        data: {
          data: mapping,
        },
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
