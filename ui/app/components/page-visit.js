import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { setIntendedUrl } from '../utils/session-utils';

export default Component.extend({
  router: service(),
  initialize(...args) {
    this._super(...args);

    this.router.on('routeDidChange', () => {
      setIntendedUrl(window.location.href);
    });
  },
});
