import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  flashMessages: service(),
  actions: {
    saveUser() {
      this.flashMessages.success('Boo!');

      return Promise.reject(new Error('bad'));
    },
  },
});
