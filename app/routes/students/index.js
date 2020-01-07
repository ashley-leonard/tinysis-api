import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  queryParams: {
    name: {
      refreshModel: true,
    },
    coordinator: {
      refreshModel: true,
    },
    schoolYear: {
      refreshModel: true,
    },
    grade: {
      refreshModel: true,
    },
  },

  model(params) {
    const { tinyData } = this;
    const {
      name,
      coordinator,
      schoolYear,
      grade,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'lastName,firstName,nickname',
    };

    if (name) {
      requestParams.name = name;
    }

    if (coordinator) {
      requestParams.coordinatorIds = coordinator;
    }

    if (schoolYear !== 'any') {
      requestParams.schoolYear = schoolYear || tinyData.getSchoolYear();
    }

    if (grade) {
      requestParams.grade = grade;
    }

    this.qp = Object.assign({}, params, {
      schoolYear: requestParams.schoolYear,
    });

    return tinyData.fetch('/api/students', {
      data: requestParams,
    });
  },

  setupController(controller, students) {
    const {
      qp: queryParams,
    } = this;

    const studentsController = this.controllerFor('students');
    studentsController.setProperties({
      queryParams,
    });

    this._super(controller, students);

    controller.setProperties(Object.assign({}, queryParams, {
      students: students.data,
    }));
  },
});
