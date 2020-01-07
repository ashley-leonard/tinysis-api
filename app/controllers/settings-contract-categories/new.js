import SettingsContractCategoryController from '../settings-contract-category';

export default SettingsContractCategoryController.extend({
  save(data) {
    return this.tinyData.fetch('/api/admin/contract-categories', {
      method: 'POST',
      data,
    });
  },
});
