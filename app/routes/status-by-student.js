import Route from '@ember/routing/route';
import { all } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  beforeModel(params) {
    const { tinyData } = this;
    this.currentSchoolYear = tinyData.getSchoolYear();
    this.schoolYear = params.schoolYear || this.currentSchoolYear;

    return tinyData.fetch('/api/terms', {
      params: {
        type: 'coor',
        status: 'active',
        schoolYear: this.schoolYear,
      },
    }).then((terms) => {
      this.term = terms.data.shift();
    });
  },

  model(params) {
    const { tinyData } = this;
    const studentId = params.student_id;
    const months = this.term.attributes.months.join(',');

    this.currentTab = params.show;

    return all([
      tinyData.fetch(`/api/students/${studentId}`),
      tinyData.fetch(`/api/statuses?months=${months}&studentIds=${studentId}`),
    ]).then((results) => {
      const [student, statuses] = results;
      this.params = params;
      this.statuses = statuses;
      return student.data;
    });
  },

  afterModel(student) {
    const { tinyData } = this;
    return all([
      tinyData.fetch(`/api/staff/${student.attributes.coordinatorId}`),
    ]).then((coordinator) => {
      this.coordinator = coordinator;
    });
  },

  setupController(controller, student) {
    this._super(controller, student);

    const {
      coordinator,
      term,
      statuses,
      schoolYear,
    } = this;

    controller.setProperties({
      currentTab: this.currentTab,
      student,
      coordinator,
      term,
      statuses,
      schoolYear,
      today: new Date(),
    });
  },
});
