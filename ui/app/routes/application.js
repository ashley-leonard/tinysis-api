import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    didTransition() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
});
