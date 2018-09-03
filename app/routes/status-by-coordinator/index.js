import Route from '@ember/routing/route';
import { all } from 'rsvp';
import fetch from '../../utils/fetch';

export default Route.extend({
  beforeModel() {
    const coordinator = this.modelFor('status-by-coordinator');
    return all([
      fetch('/api/students', {
        params: {
          coordinator_id: coordinator.data.id,
          status: 'reportable',
          order: 'lastName, firstName'
        },
      }),
      fetch('/api/terms', {
        params: {
          type: 'coor',
          status: 'active',
        },
      }),
    ]).then((results) => {
      const [students, terms] = results

      Object.assign(this, { students, terms })
    });
  },

  model(params) {
    const coordinator = this.modelFor('status-by-coordinator');
    const term = this.terms.data[0];

    return fetch('/api/statuses', {
      params: {
        coordinator_id: coordinator.data.id,
        student_ids: this.students.data.map(student => student.id),
        months: term.attributes.months,
        limit: 10000,
      },
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    const statuses = model;

    controller.setProperties({
      statuses,
      students: this.students,
    })
  }
});