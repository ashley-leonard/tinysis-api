import TinyForm from '../components/t-form';
import { inject as service } from '@ember/service';

export default TinyForm.extend({
  user: service(),
  actions: {
    async onSearchCandidates(name) {
      const result = await this.user.searchStudents({ name, scope: `contract:${this.contract.id}` });
      return result.data.map(user => ({ name: user.attributes.name, value: user.id }));
    },
    onChangeCandidate() {
    },
  },
});
