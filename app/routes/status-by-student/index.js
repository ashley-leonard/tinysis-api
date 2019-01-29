import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { all } from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  tinyData: service(),

  model(params, transition) {
    const studentId = get(transition, 'to.parent.params.student_id');

    return all([
      this.tinyData.fetch(`/api/enrollments?participantIds=${studentId}&status=enrolled`),
    ]).then((result) => {
      const [enrollments] = result;
      return enrollments;
    });
  },

  afterModel(enrollments) {
    const enrollmentIds = enrollments.data.map(e => e.id).join(',');
    return this.tinyData.fetch(`/api/statuses?enrollmentIds=${enrollmentIds}`)
      .then((enrollmentStatuses) => {
        this.enrollmentStatuses = enrollmentStatuses;
      });
  },

  setupController(controller, enrollments) {
    const statusByStudentController = this.controllerFor('status-by-student');
    const currentTab = statusByStudentController.get('currentTab');

    this._super(controller, enrollments);
    controller.setProperties({
      currentTab: currentTab === 'Notes' ? currentTab : 'Enrollments',
      enrollments,
      enrollmentStatuses: this.enrollmentStatuses,
      term: statusByStudentController.get('term'),
    });
  },
});
