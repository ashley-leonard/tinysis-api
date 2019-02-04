import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  tagName: 'li',
  classNames: 'pure-menu-item',
  classNameBindings: ['isCurrent:pure-menu-selected'],
  isCurrent: computed('router.currentRouteName', 'route', function () {
    const { route, router } = this;
    const { currentRouteName } = router;

    return route === currentRouteName;
  }),
});
