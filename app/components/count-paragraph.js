import Component from '@ember/component';
import { alias } from '@ember/object/computed';

export default Component.extend({
  count: alias('result.meta.count'),
});
