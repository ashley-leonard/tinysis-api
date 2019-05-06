import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  coordinator: computed('student', function () {
    const {
      tinyData,
      student,
    } = this;

    const coordinatorId = get(student, 'relationships.coordinator.data.id');

    if (!coordinatorId) return null;

    return tinyData.get('user', coordinatorId);
  }),
});
