import Route from '@ember/routing/route';
import {
  getTokenFromHash,
  setSessionData,
  getIntendedUrl,
  clearIntendedUrl,
} from '../utils/session-utils';

export default Route.extend({
  async redirect() {
    const jwt = await getTokenFromHash();
    setSessionData(jwt);

    let redirectUrl = getIntendedUrl();
    if (redirectUrl) {
      clearIntendedUrl();
    } else {
      redirectUrl = '/tiny';
    }
    this.transitionTo(redirectUrl);
  },
});
