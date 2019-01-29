import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('tiny', function () {
    this.route('status', {
      resetNamespace: true,
    }, function () {
      this.route('status-by-student', {
        path: '/student/:student_id',
        resetNamespace: true,
      }, function () {
        this.route('index', { path: '/' });
      });

      this.route('status-all-coordinators', {
        path: '/coordinators',
        resetNamespace: true,
      }, function () {
        this.route('index', { path: '/' });
      });

      this.route('status-by-coordinator', {
        path: '/coor/:coordinator_id',
        resetNamespace: true,
      }, function () {
        this.route('index', { path: '/' });
      });

      this.route('status-by-enrollment', {
        path: '/enrollment/:enrollment_id',
        resetNamespace: true,
      }, function () {
        this.route('index', { path: '/' });
      });
    });

    this.route('contracts', {
      resetNamespace: true,
    }, function () {
      this.route('index', { path: '/' });
    });

    this.route('students', {
      resetNamespace: true,
    }, function () {
      this.route('index', { path: '/' });
    });

    this.route('contract', {
      path: 'contract/:id',
      resetNamespace: true,
    }, function () {
      this.route('index', {
        path: '/',
      });
      this.route('edit', {
        path: '/edit',
      });
      this.route('contract-enrollments', {
        path: '/enrollments',
        resetNamespace: true,
      });
      this.route('contract-assignments', {
        path: '/assignments',
        resetNamespace: true,
      });
      this.route('contract-attendance', {
        path: '/attendance',
        resetNamespace: true,
      });
      this.route('status-by-contract', {
        path: '/status',
        resetNamespace: true,
      });
    });
  });

  this.route('404', { path: '/*path' });

  return null;
});

export default Router;
