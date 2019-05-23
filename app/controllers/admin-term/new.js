import EditController from './edit';

export default EditController.extend({
  updateModel(data) {
    return this.tinyData.fetch('/api/admin/terms', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  },
});
