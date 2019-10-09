import Service from '@ember/service';
import Auth0 from 'auth0-js';
import { Promise } from 'rsvp';
import {
  SESSION_DATA_KEY,
  SESSION_INTENDED_URL_KEY,
} from '../utils/session-utils';

export default Service.extend({
  isAuthenticated: false,

  _getAuth0WebAuth() {
    if (this._auth0WebAuth) return this._auth0WebAuth;

    const auth0WebAuth = new Auth0.WebAuth({
      domain: 'dev-ksc8v0d7.auth0.com',
      clientID: '8mPdJ0Fr9cD31vi0n18yCygUOSQURWwZ',
      responseType: 'token id_token',
      audience: 'https://nova.tinysis.org',
      scope: 'openid profile',
      redirectUri: 'http://localhost:3001/session',
    });

    this._auth0WebAuth = auth0WebAuth;

    return this._auth0WebAuth;
  },

  signIn() {
    const webAuth = this._getAuth0WebAuth();
    webAuth.authorize();
  },

  signOut() {
    const webAuth = this._getAuth0WebAuth();
    const returnTo = `${window.location.protocol}//${window.location.host}/welcome`;

    webAuth.logout({
      returnTo,
    });
  },

  getIntendedUrl() {
    return window.localStorage.getItem(SESSION_INTENDED_URL_KEY);
  },

  setIntendedUrl(url) {
    window.localStorage.setItem(SESSION_INTENDED_URL_KEY, url);
  },

  clearIntendedUrl() {
    window.localStorage.removeItem(SESSION_INTENDED_URL_KEY);
  },

  getTokenFromHash() {
    const webAuth = this._getAuth0WebAuth();
    return new Promise((resolve, reject) => {
      webAuth.parseHash({ hash: window.location.hash }, (err, authResult) => {
        if (err) return reject(err);

        return resolve(authResult);
      });
    });
  },

  setSessionData(session) {
    window.localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(session));
  },

  clearSessionData() {
    window.localStorage.removeItem(SESSION_DATA_KEY);
  },

  getSessionData() {
    const session = window.localStorage.getItem(SESSION_DATA_KEY);
    return session && JSON.parse(session);
  },
});
