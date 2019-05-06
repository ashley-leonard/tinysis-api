import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  actions: {
    willTransition() {
      const user = this.tinyData.getUser();
      if (!user.attributes.isAdmin) {
        this.transitionTo('/tiny');
      }
    },
  },
});
