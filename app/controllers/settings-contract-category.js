import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { summarizeValidationError } from '../utils/response-utils';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),

  categoryName: computed('model', function () {
    return this.model.attributes.name || 'Untitled';
  }),

  actions: {
    async save(data) {
      try {
        const result = await this.save(data);

        this.flashMessages.success(`Category ${result.data.attributes.name} was updated`);
        this.transitionToRoute('settings-contract-categories.index');
        return result;
      } catch (e) {
        this.flashMessages.alert(summarizeValidationError(e));
        return e;
      }
    },
    reportError(error) {
      this.flashMessages.alert(error);
    },
  },
  save(data) {
    return this.tinyData.fetch(`/api/admin/contract-categories/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    });
  },

});
