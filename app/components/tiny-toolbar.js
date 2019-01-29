import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  classNames: ['pure-menu', 'pure-menu-horizontal'],
  currentRoute: computed('router.currentRoute', function () {
    return this.router.currentRoute;
  }),
});
