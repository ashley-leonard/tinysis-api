import StatusByCoordinatorIndex from '../status-by-coordinator/index';

export default StatusByCoordinatorIndex.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('coordinator', this.getCoordinator());
  },
  getCoordinator() {
    const { tinyData } = this;
    const user = tinyData.getUser();

    return user;
  },

});
