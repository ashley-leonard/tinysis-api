import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { setIntendedUrl } from '../utils/session-utils';

export default class PageVisit extends Component {
  @service router;

  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', transition => {
      setIntendedUrl(window.location.href);
    });
  }
};
