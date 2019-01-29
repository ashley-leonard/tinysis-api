import Component from '@ember/component';
import { equal } from '@ember/object/computed';

export default Component.extend({
  tagName: 'li',
  classNames: 'pure-menu-item',
  classNameBindings: ['isCurrent'],
  pureMenuSelected: equal('currentRoute', 'route'),
});
