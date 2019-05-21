import AdminUserEditController from './edit';

export default AdminUserEditController.extend({
  updateUser(data) {
    return this.tinyData.fetch('/api/admin/users', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  },
});
