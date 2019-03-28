import Pretender from 'pretender';
import Logger from 'tinysis-ui/utils/logger';
import settingsFixture from '../fixtures/settings';
import profileFixture from '../fixtures/profile';
import yearsFixture from '../fixtures/years';

export default class MockServer {
  constructor() {
    this.fixtures = {};
    this.requests = [];
    this.monitors = [];
    this.server = new Pretender();
  }

  /*
   * Required method to call on afterEach hook. Otherwise Pretender
   * will justifiably complain that there are multiple servers active.
   */
  shutdown() {
    this.server.shutdown();
  }

  /*
   * Adds a generic monitor function that just echoes the verb, path,
   * and Pretender response array back.
   */
  addLogger() {
    this.addMonitor(Logger.info);
  }

  /*
   * Adds a callback function that can monitor Pretender traffic.
   * @param {Function} callback - A function that accepts three arguments: verb, path, response
   */
  addMonitor(monitorFunction) {
    this.monitors.push(monitorFunction);
    this.server.handledRequest = (...args) => {
      this.monitors.forEach(monitor => monitor(...args));
    };
  }

  /*
   * Adds one or more fixtures to the fixture store. These are cloned
   * on the way in. The actual values served via Pretender are returned
   * via the getFixture call. This allows you to get a fixture from the
   * mock server and modify it for your purposes.
   *
   * @param {Object} fixture - An object, generally keyed by API path,
   * whose values are the desired fixture to use for that request.
   */
  addFixtures(fixtures = {}) {
    const cloned = Object.keys(fixtures).reduce((memo, key) => {
      const fixture = fixtures[key];
      memo[key] = fixture && JSON.parse(JSON.stringify(fixture));
      return memo;
    }, {});

    this.fixtures = { ...this.fixtures, ...cloned };
  }

  /*
   * Gets a fixture from the fixture store.
   * @param {String} key - name of fixture (generally the API path)
   * @returns The fixture
   * @throws An error if the key is unknown
   */
  getFixture(key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!this.fixtures.hasOwnProperty(key)) throw new Error('Unknown fixture');
    return this.fixtures[key];
  }

  /*
   * Adds a request handler. Creates an anonymous callback that will retrieve
   * the fixture associated with the provided path at the time the call is serviced
   * by Pretender, and echo back the specified response and status code.
   * @param {String} verb - http verb to mock e.g. get, put, post
   * @param {String} path - path to mock
   * @param {String} responseBody - optional value to return, default is nothing
   * @param {String} statusCode - optional status code, default 200
   */
  addRequest(verb, path, responseBody = null, statusCode = 200) {
    const responseSpec = [
      statusCode,
    ];

    this.addFixtures({
      [path]: responseBody,
    });

    this.server[verb](path, () => {
      const fixture = this.getFixture(path);
      let contentType;

      if (responseBody === null) {
        // no changes
      } else if (typeof responseBody === 'object') {
        contentType = { 'content-type': 'application/json' };
      } else {
        throw new Error('Unexpected response type, please add');
      }

      return responseSpec.concat([
        contentType,
        fixture && JSON.stringify(fixture),
      ]);
    });
  }
}

/*
  * Provisions the settings, profile, and years routes that are the bootstrap
  * requests needed for any tinysis dashboard.
  * @param {Object} server - the mock server instance on which to provision these routes
  */
export function provisionTinySisBootstrapRoutes(server) {
  server.addRequest('get', '/api/settings', settingsFixture);
  server.addRequest('get', '/api/profile', profileFixture);
  server.addRequest('get', '/api/settings/years', yearsFixture);
}
