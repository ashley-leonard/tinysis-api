import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  async redirect() {
    const { session } = this;
    const jwt = await session.getTokenFromHash();
    session.setSessionData(jwt);

    let redirectUrl = session.getIntendedUrl();
    if (redirectUrl) {
      this.session.clearIntendedUrl();
    } else {
      redirectUrl = '/tiny';
    }
    this.transitionTo(redirectUrl);
  },
});
