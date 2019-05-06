import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'name', 'role', 'coordinator', 'grade', 'status'],
  name: '',
  role: '',
  status: '',
  schoolYear: '',
  coordinator: '',
  grade: '',
});
