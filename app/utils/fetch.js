import _fetch from 'fetch';
import { Promise } from 'rsvp';
import { getSessionData } from './session-utils';

export default function fetch(_url, callerOptions = {}) {
  const urlObj = new URL(`${window.location.origin}${_url}`);
  const params = callerOptions.params || {};
  const session = getSessionData();
  const headers = callerOptions.headers || {};

  Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]));
  const url = `${urlObj.pathname}${urlObj.search}`;

  headers['Content-Type'] = 'application/json';
  headers.Authorization = `Bearer ${session.accessToken}`;

  const options = {
    ...callerOptions,
    headers,
  };

  return new Promise((resolve, reject) => {
    _fetch(url, options)
      .then((response) => {
        if (response.ok) return resolve(response.json());

        const err = new Error(response.statusText);
        Object.assign(err, {
          url,
          status: response.status,
        });

        return response.json()
          .then((json) => {
            reject(Object.assign(json, err));
          }).catch(() => {
            reject(err);
          });
      });
  });
}
