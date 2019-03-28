import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  coordinator: computed('student', function () {
    const {
      tinyData,
      student,
    } = this;
    return tinyData.get('user', student.relationships.coordinator.data.id);
  }),
});
