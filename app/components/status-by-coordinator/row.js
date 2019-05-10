import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'tr',

  'data-test-student-id': alias('student.id'),

  studentHash: computed('statusHash', 'student', function () {
    const { statusHash, student } = this;

    return statusHash[student.id] || {};
  }),

  studentStatus: computed('student', function () {
    if (this.student.attributes.isActive) {
      return 'Active';
    }

    return 'Inactive';
  }),
});
