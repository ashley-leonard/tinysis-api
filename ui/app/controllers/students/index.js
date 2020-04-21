import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'name', 'coordinator', 'grade'],
  name: '',
  coordinator: null,
  grade: null,
});
