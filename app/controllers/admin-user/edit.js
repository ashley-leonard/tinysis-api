import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { summarizeValidationError } from '../../utils/response-utils';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    saveUser(data) {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await this.updateUser(data);
          resolve(result);
          this.flashMessages.success('User was successfully saved.');
          this.transitionToRoute('admin-users.index');
        } catch (e) {
          reject(e);
          this.flashMessages.alert(summarizeValidationError(e));
        }
      });
    },
    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },

  updateUser(data) {
    return this.tinyData.fetch(`/api/admin/users/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    });
  },
});
