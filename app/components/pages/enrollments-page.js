import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),

  enrollmentsList: computed('enrollments', function () {
    const { enrollments, tinyData } = this;

    return enrollments.data
      .sort((enrollment1, enrollment2) => {
        const contract1 = tinyData.get('contract', enrollment1.relationships.contract.data.id);
        const contract2 = tinyData.get('contract', enrollment2.relationships.contract.data.id);

        return contract1.attributes.name.localeCompare(contract2.attributes.name);
      });
  }),
});
