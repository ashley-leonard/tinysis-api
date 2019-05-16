import EditRoute from './edit';

export default EditRoute.extend({
  model() {
    return {
      data: {
        attributes: {
          months: [],
          creditDate: new Date().toISOString().substr(0, 10),
          status: 'active',
          schoolYear: this.tinyData.getSchoolYear(),
        },
      },
    };
  },
});
