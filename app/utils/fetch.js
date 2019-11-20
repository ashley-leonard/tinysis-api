import _fetch from 'fetch';
import { Promise, reject } from 'rsvp';
import { getSessionData, AuthError } from './session-utils';

export default function fetch(_url, callerOptions = {}) {
  const urlObj = new URL(`${window.location.origin}${_url}`);
  const params = callerOptions.params || {};
  const session = getSessionData();
  const headers = callerOptions.headers || {};

  if (!session) return reject(new AuthError());

  Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]));
  const url = `${urlObj.pathname}${urlObj.search}`;

  headers['Content-Type'] = 'application/json';
  headers.Authorization = `Bearer ${session.accessToken}`;

  const options = {
    ...callerOptions,
    headers,
  };

  return new Promise((resolve, rej) => {
    _fetch(url, options)
      .then((response) => {
        if (response.ok) {
          if (response.status === 204) {
            return resolve();
          }

          return resolve(response.json());
        }

        if (response.status === 401) {
          return reject(new AuthError());
        }

        const err = new Error(response.statusText);
        Object.assign(err, {
          url,
          status: response.status,
        });

        return response.json()
          .then((json) => {
            rej(Object.assign(json, err));
          }).catch(() => {
            rej(err);
          });
      })
      .catch(e => rej(e));
  });
}
