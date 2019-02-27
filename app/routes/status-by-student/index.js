import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  tinyData: service(),

  model(params, transition) {
    const studentId = get(transition, 'to.parent.params.student_id');

    return this.tinyData.fetch(`/api/enrollments?participantIds=${studentId}&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant`);
  },

  async afterModel(enrollments) {
    const enrollmentIds = enrollments.data.map(e => e.id).join(',');
    this.enrollmentStatuses = await this.tinyData.fetch(`/api/statuses?enrollmentIds=${enrollmentIds}`);
  },

  setupController(controller, model) {
    const statusByStudentController = this.controllerFor('status-by-student');
    const currentTab = statusByStudentController.get('currentTab');

    this._super(controller, model);
    controller.setProperties({
      currentTab: currentTab === 'Notes' ? currentTab : 'Enrollments',
      enrollments: model.data,
      enrollmentStatuses: this.enrollmentStatuses.data,
      term: statusByStudentController.get('term'),
    });
  },
});
