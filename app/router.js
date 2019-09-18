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
    });

    this.route('contracts', {
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
      }, function () {
        this.route('index', {
          path: '/',
        });
        this.route('contract-attendance-roll', {
          path: '/:meeting_id',
          resetNamespace: true,
        });
      });
      this.route('status-by-contract', {
        path: '/status',
        resetNamespace: true,
      }, function () {
        this.route('index', {
          path: '/',
        });
        this.route('status-by-enrollment', {
          path: '/:enrollment_id',
          resetNamespace: true,
        });
      });
    });

    this.route('student', {
      path: 'student/:id',
      resetNamespace: true,
    }, function () {
      this.route('student-transcript', {
        path: '/transcript',
        resetNamespace: true,
      });
      this.route('student-learning-plan', {
        path: '/learning',
        resetNamespace: true,
      });
      this.route('student-credits', {
        path: '/credits',
        resetNamespace: true,
      });
      this.route('student-graduation-plan', {
        path: '/graduation',
        resetNamespace: true,
      });
    });

    this.route('students', {
      resetNamespace: true,
    }, function () {
      this.route('index', { path: '/' });
    });

    this.route('admin', {
      path: '/admin',
      resetNamespace: true,
    }, function () {
      this.route('index', { path: '/' });
      this.route('admin-users', {
        resetNamespace: true,
        path: '/users',
      }, function () {
        this.route('index', { path: '/' });
      });

      this.route('admin-user', {
        resetNamespace: true,
        path: '/user',
      }, function () {
        this.route('new');
        this.route('edit', { path: ':id' });
      });

      this.route('admin-terms', {
        resetNamespace: true,
        path: '/terms',
      }, function () {
        this.route('index', { path: '/' });
      });

      this.route('admin-term', {
        resetNamespace: true,
        path: '/term',
      }, function () {
        this.route('new', { path: 'new' });
        this.route('edit', { path: ':id' });
      });

      this.route('admin-credit-batches', {
        resetNamespace: true,
        path: '/credit-batches',
      });

      this.route('admin-credit-batch', {
        resetNamespace: true,
        path: '/credit-batch/:id',
      });

      this.route('admin-reports', {
        resetNamespace: true,
        path: '/reports',
      });

      this.route('admin-settings', {
        resetNamespace: true,
        path: '/settings',
      }, function () {
        this.route('index', { path: '/' });
        this.route('settings-calendar', {
          resetNamespace: true,
          path: '/calendar',
        });

        this.route('settings-credits', {
          resetNamespace: true,
          path: '/credits',
        }, function () {
          this.route('index', { path: '/' });
        });

        this.route('settings-credit', {
          resetNamespace: true,
          path: '/credit',
        }, function () {
          this.route('new');
          this.route('edit', { path: ':id' });
        });

        this.route('settings-contract-categories', {
          resetNamespace: true,
          path: '/contract-categories',
        }, function () {
          this.route('index', { path: '/' });
          this.route('new');
          this.route('settings-contract-category', {
            resetNamespace: true,
            path: ':id',
          });
        });
        this.route('settings-competencies', {
          resetNamespace: true,
          path: '/competencies',
        });
        this.route('settings-learning-plan-goals', {
          resetNamespace: true,
          path: '/learning-plan-goals',
        });
        this.route('settings-graduation-plan-requirements', {
          resetNamespace: true,
          path: '/graduation-plan-requirements',
        }, function () {
          this.route('index', { path: '/' });
          this.route('new');
          this.route('edit', { path: '/:id' });
        });
        this.route('settings-periods', {
          resetNamespace: true,
          path: '/periods',
        });
      });
    });
  });

  this.route('welcome');
  this.route('user-settings');
  this.route('session');
  this.route('404', { path: '/*path' });

  return null;
});

export default Router;
