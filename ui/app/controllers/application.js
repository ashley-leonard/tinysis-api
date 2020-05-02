import Controller from '@ember/controller';
import {
  signIn,
  signOut,
} from '../utils/session-utils';

export default Controller.extend({
  actions: {
    signIn,
    signOut,
  },
});
