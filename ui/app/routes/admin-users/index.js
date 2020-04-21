import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  tinyData: service(),

  queryParams: {
    name: {
      refreshModel: true,
    },
    role: {
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
    status: {
      refreshModel: true,
    },
  },

  model(params) {
    const { tinyData } = this;
    const {
      name,
      coordinator,
      grade,
      role,
      schoolYear,
      status,
    } = params;

    const requestParams = {
      limit: 20,
      order: 'lastName,firstName,nickname',
      include: 'coordinator',
    };

    if (name) {
      requestParams.name = name;
    }

    if (coordinator) {
      requestParams.coordinatorIds = coordinator;
    }

    if (grade) {
      requestParams.grade = grade;
    }

    if (role) {
      requestParams.role = role;
    }

    if (schoolYear) {
      requestParams.schoolYear = schoolYear;
    }

    if (status) {
      requestParams.status = status;
    }

    this.qp = { ...params };

    return tinyData.fetch('/api/admin/users', {
      data: requestParams,
    });
  },

  async afterModel(result) {
    const emails = result.data
      .filter(user => user.attributes.email)
      .map(user => user.attributes.email);

    const emailsFilter = emails
      .map(email => `"${email}"`)
      .join(' OR ');
    const loginsResult = await this.tinyData.fetch('/api/admin/logins', {
      data: {
        q: `email:(${emailsFilter})`,
      },
    });

    this.loginsResult = loginsResult;
  },

  setupController(controller, users) {
    const {
      qp: queryParams,
      loginsResult,
    } = this;

    this._super(controller, users);

    controller.setProperties(Object.assign({}, queryParams, {
      users: users.data,
      logins: loginsResult.data,
    }));

    const usersController = this.controllerFor('admin-users');

    usersController.setProperties({
      queryParams,
    });
  },
});
