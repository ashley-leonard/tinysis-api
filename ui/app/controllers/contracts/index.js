import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['schoolYear', 'term', 'facilitator', 'category', 'status'],

  schoolYear: '',
  term: '',
  facilitator: '',
  category: '',
  status: '',
});
