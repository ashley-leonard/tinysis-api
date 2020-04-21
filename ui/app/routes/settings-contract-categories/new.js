import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      attributes: {
        name: '',
        reporting: 'monthly',
        homeroom: false,
        public: true,
        sequence: 200,
      },
    };
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('category', model);
  },
});
