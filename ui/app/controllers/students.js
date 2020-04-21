import Controller, { inject } from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  'students.index': inject(),

  queryParams: computed(() => {}),
  terms: computed(() => []),
  staff: computed(() => []),

  actions: {
    filterStudents(queryParams) {
      const studentsIndexController = this['students.index'];
      studentsIndexController.setProperties(queryParams);
    },
  },
});
