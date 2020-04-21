import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // intended to be overwritten by caller
  queryParams: computed(() => ({})),
  statusOptions: computed(() => ['Active', 'Inactive']
    .map(name => ({
      name,
      status: name.toLowerCase(),
    }))),
  courseTypeOptions: computed(() => ['Credit', 'General']
    .map(courseType => ({
      name: courseType.toLowerCase(),
      courseType,
    }))),
  actions: {
    onSubmit(event) {
      event.preventDefault();
      this.updateSearch(this.queryParams);
    },
    onChangeStatus(status) {
      const { queryParams } = this;
      this.set('queryParams', {
        ...queryParams,
        status,
      });
      this.updateSearch(this.queryParams);
    },
    onChangeSearch(event) {
      const { queryParams } = this;
      this.set('queryParams', {
        ...queryParams,
        search: event.target.value,
      });
      this.updateSearch(this.queryParams);
    },
  },
});
