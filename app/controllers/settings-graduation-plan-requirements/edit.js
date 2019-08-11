import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tinyData: service(),

  actions: {
    async save(requirement) {
      const result = await this.updateRequirement(requirement);

      this.flashMessages.success('Requirement was successfully saved.');
      this.transitionToRoute('settings-graduation-plan-requirements.index');

      return result;
    },
  },

  updateRequirement(data) {
    let url = '/api/admin/graduation-plan-requirements';
    let method;

    if (data.id) {
      url = `${url}/${data.id}`;
      method = 'PUT';
    } else {
      method = 'POST';
    }

    return this.tinyData.fetch(url, {
      method,
      body: JSON.stringify({ data }),
    });
  },
});
