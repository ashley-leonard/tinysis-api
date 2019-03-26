import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),

  groupedEalrs: computed('ealrs', function () {
    const { ealrs, tinyData } = this;
    const categories = ealrs.reduce((memo, relation) => {
      const ealr = tinyData.get('ealr', relation.id);
      const category = memo[ealr.attributes.category] || [];
      category.push(ealr);
      memo[ealr.attributes.category] = category;
      return memo;
    }, {});

    return Object.keys(categories).sort()
      .map((categoryName) => {
        const category = categories[categoryName];
        return {
          categoryName,
          ealrs: category
            .sort((ealr1, ealr2) => ealr1.attributes.seq.localeCompare(ealr2.attributes.seq)),
        };
      });
  }),

});
