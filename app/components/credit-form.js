import { computed } from '@ember/object';
import TForm from './t-form';

export default TForm.extend({
  statusOptions: computed(() => (
    ['Active', 'Inactive']
      .map(status => ({
        name: status,
        value: status.toLowerCase(),
      }))
  )),
  courseTypeOptions: computed(() => (
    ['Course', 'General']
      .map(type => ({
        name: type,
        value: type.toLowerCase(),
      }))
  )),
});
