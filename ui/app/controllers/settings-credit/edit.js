import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  tinyData: service(),
  actions: {
    async saveCredit(data) {
      let url;
      let method;

      if (data.id) {
        url = `/api/admin/credits/${data.id}`;
        method = 'put';
      } else {
        url = '/api/admin/credits';
        method = 'post';
      }

      const result = await this.tinyData.fetch(url, {
        method,
        data,
      });

      this.flashMessages.success('Credit was successfully saved.');
      this.transitionToRoute('settings-credits');
      return result;
    },
  },
});
