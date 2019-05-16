import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    saveTerm(data) {
      return this.updateModel(data).then((result) => {
        this.flashMessages.success('Term was successfully saved.');
        this.transitionToRoute('admin-terms');
        return result;
      });
    },
    reportError() {
      this.flashMessages.alert('Please check the values and correct any errors');
    },
  },
  updateModel(data) {
    return this.tinyData.fetch(`/api/admin/terms/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify({ data }),
    });
  },
});
