import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  queryParams: {
    schoolYear: {
      refreshModel: true,
    },
    status: {
      refreshModel: true,
    },
  },

  model(params) {
    const { tinyData } = this;
    const {
      schoolYear,
      status,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'name',
      include: 'usage',
    };

    if (schoolYear !== 'any') {
      requestParams.schoolYear = schoolYear || tinyData.getSchoolYear();
    }

    if (status) {
      requestParams.status = status;
    }

    this.qp = Object.assign({}, params, {
      schoolYear: requestParams.schoolYear,
    });

    return tinyData.fetch('/api/terms', {
      data: requestParams,
    });
  },

  setupController(controller, terms) {
    const {
      qp: queryParams,
    } = this;

    this._super(controller, terms);

    controller.setProperties({
      queryParams,
    });

    controller.setProperties(Object.assign({}, queryParams, {
      terms: terms.data,
    }));

    const adminTermsController = this.controllerFor('admin-terms');
    adminTermsController.set('queryParams', queryParams);
  },
});
