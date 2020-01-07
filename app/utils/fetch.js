import _fetch from 'fetch';
import { Promise, reject } from 'rsvp';
import { getSessionData, AuthError } from './session-utils';

/* Build error object from a Rails API response.
 * @param {Object} response | response from fetch
 * @returns {Object} Object with fields:
 * @attribute {String} message
 * @attribute {Number} status
 * @attribute {String} responseText
 * @attribute {Object} body
 */
export async function buildError(url, response) {
  const err = new Error(response.statusText);

  err.url = url;
  err.status = response.status;

  const body = await response.text();
  try {
    err.responseText = body;
    err.body = JSON.parse(body);
    return err;
  } catch (e) {
    return err;
  }
}

export default async function fetch(_url, callerOptions = {}) {
  const session = getSessionData();
  if (!session) return reject(new AuthError());

  const urlObj = new URL(`${window.location.origin}${_url}`);
  const headers = callerOptions.headers || {};
  const { data } = callerOptions;
  const options = {
    method: 'GET',
    ...callerOptions,
    headers,
    data: null,
  };

  if (data) {
    if (options.method === 'GET' || options.method === 'DELETE') {
      Object.keys(data).forEach(key => urlObj.searchParams.append(key, data[key]));
    } else {
      options.body = JSON.stringify(data);
    }
  }

  const url = `${urlObj.pathname}${urlObj.search}`;

  headers['Content-Type'] = 'application/json';
  headers.Authorization = `Bearer ${session.accessToken}`;

  return new Promise(async (resolve, rej) => {
    const response = await _fetch(url, options);

    if (response.ok) {
      if (response.status === 204) {
        return resolve();
      }

      return resolve(response.json());
    }

    if (response.status === 401) {
      return reject(new AuthError());
    }

    return rej(await buildError(url, response));
  });
}
