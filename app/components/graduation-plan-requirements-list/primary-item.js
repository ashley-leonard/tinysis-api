import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: 'tbody',
  children: computed('requirement', function () {
    const { tinyData } = this;
    const children = this.get('requirement.relationships.children.data');

    if (children) {
      return children
        .map(child => tinyData.get('graduationPlanRequirement', child.id))
        .sort((req1, req2) => req1.attributes.position - req2.attributes.position);
    }
    return null;
  }),
});
