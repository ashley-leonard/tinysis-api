import Route from '@ember/routing/route';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  beforeModel() {
    return all([
      this.tinyData.fetch('/api/students', {
        data: {
          status: 'reportable',
          order: 'lastName, firstName',
          limit: -1,
        },
      }),
      this.tinyData.fetch('/api/terms', {
        data: {
          type: 'coor',
          status: 'active',
          schoolYear: this.tinyData.getSchoolYear(),
        },
      }),
    ]).then(([students, terms]) => {
      Object.assign(this, { students, terms });
    });
  },

  model() {
    const [term] = this.terms.data;
    this.term = term;

    return all([
      this.tinyData.fetch('/api/staff', {
        data: {
          status: 'active',
          coordinators: true,
          order: 'lastName, firstName',
          limit: -1,
        },
      }),

      this.tinyData.fetch('/api/statuses', {
        data: {
          studentIds: this.students.data.map(student => student.id),
          months: term.attributes.months,
          type: 'student',
          limit: -1,
        },
      }),
    ]);
  },

  setupController(controller, model) {
    this._super(controller, model);
    const [coordinators, statuses] = model;

    controller.setProperties({
      statuses,
      coordinators,
      students: this.students,
      term: this.term,
    });
  },
});
