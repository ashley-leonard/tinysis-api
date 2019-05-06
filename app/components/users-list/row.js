import { alias, equal } from '@ember/object/computed';
import Row from '../students-list/row';

export default Row.extend({
  student: alias('user'),
  isStudent: equal('user.attributes.role', 'student'),
});
