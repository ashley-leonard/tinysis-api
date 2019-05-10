import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    saveUser(data) {
      return this.tinyData.fetch(`/api/admin/users/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify({ data }),
      }).then((result) => {
        this.flashMessages.success('User was successfully saved.');
        return result;
      });
    },
    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },
});
