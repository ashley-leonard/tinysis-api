import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: 'tbody',
  children: computed('requirement', 'status', function () {
    const { tinyData, status } = this;
    const children = this.get('requirement.relationships.children.data') || [];

    if (children.length === 0) {
      return null;
    }

    let results = children
      .map(child => tinyData.get('graduationPlanRequirement', child.id))
      .sort((req1, req2) => req1.attributes.position - req2.attributes.position);

    if (status && status !== 'all') {
      results = results.filter(req => req.attributes.status === status);
    }

    return results;
  }),
});
