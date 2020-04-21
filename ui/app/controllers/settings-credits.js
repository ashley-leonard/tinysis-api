import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  'settings-credits.index': controller(),
  actions: {
    updateSearch(params) {
      this.set('qp', params);
      this['settings-credits.index'].setProperties(params);
    },
  },
});
