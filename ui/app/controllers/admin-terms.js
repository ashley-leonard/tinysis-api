import Controller, { inject } from '@ember/controller';

export default Controller.extend({
  'admin-terms.index': inject(),

  actions: {
    changeSelection(queryParams) {
      const adminIndexController = this['admin-terms.index'];
      adminIndexController.setProperties(queryParams);
    },
  },
});
