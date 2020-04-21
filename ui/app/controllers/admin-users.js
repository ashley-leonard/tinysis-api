import Controller, { inject } from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  'admin-users.index': inject(),

  queryParams: computed(() => {}),
  terms: computed(() => []),
  staff: computed(() => []),

  actions: {
    filterUsers(queryParams) {
      const adminIndexController = this['admin-users.index'];
      adminIndexController.setProperties(queryParams);
    },
  },
});
