import clone from 'tinysis-ui/utils/clone';
import jwtFixture from '../fixtures/auth0-jwt';

export class MockLocalStorage {
  constructor(mockStubs = { _tinySisSession: JSON.stringify(jwtFixture) }) {
    this._stubs = clone(mockStubs);
    this._realLocalStorage = window.localStorage;
    Object.defineProperties(window, {
      localStorage: {
        value: this,
        writable: true,
      },
    });
  }

  getItem(key) {
    return this._stubs[key] || null;
  }

  setItem(key, value) {
    this._stubs[key] = value || null;
  }

  removeItem(key) {
    this._stubs[key] = null;
  }

  unmock() {
    Object.defineProperties(window, {
      localStorage: {
        value: this._realLocalStorage,
        writable: false,
      },
    });
  }
}

export { clone };
