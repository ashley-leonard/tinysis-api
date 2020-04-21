import Route from '@ember/routing/route';

const settingsRoutes = [{
  route: 'settings-calendar',
  title: 'Calendar settings',
}, {
  route: 'settings-contract-categories',
  title: 'Contract categories',
}, {
  route: 'settings-credits',
  title: 'Credits',
}, {
  route: 'settings-periods',
  title: 'Class periods',
}, {
  route: 'settings-competencies',
  title: 'Competencies (EALRs)',
}, {
  route: 'settings-graduation-plan-requirements',
  title: 'Graduation plan requirements',
}, {
  route: 'settings-learning-plan-goals',
  title: 'Learning plan goals',
}];

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      settingsRoutes,
    });
  },
});
