import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
    signin() {
      this.session.signIn();
    },

    signout() {
      this.session.clearSessionData();
      this.session.signOut();
    },
  },
});
