import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'status'],
  status: 'active',
  schoolYear: '',
});
