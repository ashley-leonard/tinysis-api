export const SESSION_DATA_KEY = '_tinySisSession';
export const SESSION_INTENDED_URL_KEY = '_tinySisRedirect';

export function getSessionData() {
  const data = window.localStorage.getItem(SESSION_DATA_KEY);

  if (!data) throw new Error('No session');

  return JSON.parse(data);
}
