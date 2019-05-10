import { alias, equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import Row from '../students-list/row';

export default Row.extend({
  student: alias('user'),
  isStudent: equal('user.attributes.role', 'student'),
  userStatus: computed('user', function () {
    if (this.user.attributes.isActive) {
      return 'Active';
    }
    return 'Inactive';
  }),
});
