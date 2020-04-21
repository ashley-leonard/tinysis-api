import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'tr',
  'data-test-coordinator-id': alias('coordinator.id'),
});
