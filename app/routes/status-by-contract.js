import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  model() {
    const contract = this.modelFor('contract');
    return this.tinyData.fetch(`/api/enrollments?contractIds=${contract.data.id}&include=credit_assignments,credit_assignments.credit,participant`);
  },
});
