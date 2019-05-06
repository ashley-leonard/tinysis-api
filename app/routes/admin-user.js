import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';

export default Route.extend({
  tinyData: service(),

  model(params) {
    return all([
      this.tinyData.fetch(`/api/admin/users/${params.id}`),
      this.tinyData.fetch('/api/staff?order=lastName,firstName'),
    ]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    const [
      user,
      staff,
    ] = model;
    controller.setProperties({
      user: user.data,
      staff: staff.data,
    });
  },
});
