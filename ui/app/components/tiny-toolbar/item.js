import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  tagName: '',
  isCurrent: computed('router.currentRouteName', 'route', function () {
    const { route, router } = this;
    const { currentRouteName } = router;

    return route === currentRouteName;
  }),
});
