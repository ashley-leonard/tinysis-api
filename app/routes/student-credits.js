import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  async beforeModel() {
    this.availableCredits = await this.tinyData.fetch('/api/credits?limit=-1&status=active');
  },
  model() {
    const student = this.modelFor('student');

    this.student = student.data;

    return this.tinyData.fetch(`/api/credit-assignments?studentIds=${student.data.id}&limit=-1&includeFulfilledAttributes=true&include=contractTerm,contractFacilitator,contract,notes`);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      student: this.student,
      creditAssignments: model.data,
      availableCredits: this.availableCredits.data,
      selectedCredits: [],
      today: new Date(),
    });
  },
  actions: {
    refreshModel() {
      this.refresh();
    },
  },
});
