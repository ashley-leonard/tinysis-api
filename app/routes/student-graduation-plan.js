import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  async beforeModel() {
    this.requirements = await this.tinyData.fetch('/api/graduation-plan-requirements?status=active');
  },
  model() {
    const student = this.modelFor('student').data;
    this.student = student;
    return this.tinyData.fetch(`/api/graduation-plan-mappings/${student.id}`);
  },
  setupController(ctrl, model) {
    this._super(ctrl, model);

    const creditAssignments = model.included.filter(inc => inc.type === 'creditAssignment');

    ctrl.setProperties({
      student: this.student,
      creditAssignments,
      requirements: this.requirements.data,
      mappings: model.data,
    });
  },
});
