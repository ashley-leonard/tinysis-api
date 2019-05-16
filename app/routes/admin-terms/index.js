import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),
  queryParams: {
    name: {
      refreshModel: true,
    },
    schoolYear: {
      refreshModel: true,
    },
    active: {
      refreshModel: true,
    },
  },

  model(params) {
    const { tinyData } = this;
    const {
      name,
      schoolYear,
      active,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'name',
      include: 'usage',
    };

    if (name) {
      requestParams.name = name;
    }

    if (schoolYear !== 'any') {
      requestParams.schoolYear = schoolYear || tinyData.getSchoolYear();
    }

    if (active) {
      requestParams.active = active;
    }

    this.qp = Object.assign({}, params, {
      schoolYear: requestParams.schoolYear,
    });

    return tinyData.fetch('/api/terms', {
      params: requestParams,
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
  },
});
