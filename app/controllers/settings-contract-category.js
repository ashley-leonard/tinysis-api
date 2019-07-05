import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { summarizeValidationError } from '../utils/response-utils';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),

  actions: {
    togglePublic(event) {

    },
    async save(data) {
      try {
        return await this.tinyData.fetch(`/api/admin/contract-categories/${data.id}`, {
          method: 'PUT',
          body: JSON.stringify({ data }),
        });
      } catch (e) {
        this.flashMessages.alert(summarizeValidationError(e));
        return e;
      }
    },
    reportError(error) {
      this.flashMessages.error(error);
    },
  },
});
