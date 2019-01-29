import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {
  schoolYearTerms,
} from '../../utils/contract-utils';

export default Route.extend({
  tinyData: service(),

  queryParams: {
    term: {
      refreshModel: true,
    },
    schoolYear: {
      refreshModel: true,
    },
    facilitator: {
      refreshModel: true,
    },
    category: {
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
      term,
      facilitator,
      category,
      status,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'name',
    };

    requestParams.schoolYear = schoolYear || tinyData.getSchoolYear();

    if (term) {
      requestParams.termIds = term;
    }

    if (facilitator) {
      requestParams.facilitatorIds = facilitator;
    }

    if (category) {
      requestParams.categoryIds = category;
    }

    if (status) {
      requestParams.status = status;
    }

    this.qp = Object.assign({}, params, {
      schoolYear: requestParams.schoolYear,
    });

    return tinyData.fetch('/api/contracts', {
      params: requestParams,
    });
  },

  setupController(controller, contracts) {
    const {
      tinyData,
      qp: queryParams,
    } = this;

    const terms = tinyData.get('term');
    const filteredTerms = schoolYearTerms(queryParams.schoolYear, terms);

    const contractsController = this.controllerFor('contracts');
    contractsController.setProperties({
      terms: filteredTerms,
      queryParams,
    });

    this._super(controller, contracts);

    controller.setProperties(Object.assign({}, queryParams));
  },
});
