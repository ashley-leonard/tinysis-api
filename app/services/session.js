import Service from '@ember/service';
import Auth0 from 'auth0-js';
import { Promise } from 'rsvp';
import {
  SESSION_DATA_KEY,
  SESSION_INTENDED_URL_KEY,
} from '../utils/session-utils';

export default Service.extend({
  isAuthenticated: false,

  getAuth0() {
    if (!this.auth0) {
      this.auth0 = new Auth0.WebAuth({
        domain: 'dev-ksc8v0d7.auth0.com',
        clientID: '8mPdJ0Fr9cD31vi0n18yCygUOSQURWwZ',
        responseType: 'token id_token',
        audience: 'https://nova.tinysis.org',
        scope: 'openid profile',
        redirectUri: 'http://localhost:3001/session',
      });
    }

    return this.auth0;
  },

  signIn() {
    const auth0 = this.getAuth0();
    auth0.authorize();
  },

  signOut() {
    const auth0 = this.getAuth0();
    const returnTo = `${window.location.protocol}//${window.location.host}/welcome`;

    auth0.logout({
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
    const auth0 = this.getAuth0();
    return new Promise((resolve, reject) => {
      auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
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
});
