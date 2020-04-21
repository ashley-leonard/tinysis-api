import Controller, { inject } from '@ember/controller';

function emptyArray() {
  return [];
}

export default Controller.extend({
  'contracts.index': inject(),
  terms: emptyArray(),
  categories: emptyArray(),
  facilitators: emptyArray(),
  schoolYears: emptyArray(),
  actions: {
    filterContracts(queryParams) {
      const contractsIndexController = this['contracts.index'];
      contractsIndexController.setProperties(queryParams);
    },
  },
});
