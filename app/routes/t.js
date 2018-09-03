import Route from '@ember/routing/route';
import fetch from 'tinysis-ui/utils/fetch';

export default Route.extend({
  model() {
    return fetch('/api/settings');
  },
});
