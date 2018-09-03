import _fetch from 'fetch';
import { Promise } from 'rsvp';

export default function fetch(_url, options = {}) {
  const urlObj = new URL(`${location.origin}${_url}`);
  const params = options.params || {};

  Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]));

  const url = `${urlObj.pathname}${urlObj.search}`;
  return new Promise((resolve, reject) => {
    _fetch(url, options)
      .then((response) => {

        if (response.ok) return resolve(response.json());

        const err = new Error(response.statusText);
        Object.assign(err, {
          url,
          status: response.status,
          statusText: response.statusText,
        });

        return response.json()
          .then(json => {
            reject(Object.assign(err, {
              error: json,
            }));
          }).catch(() => {
            reject(err);
          });
      });
  });
}
