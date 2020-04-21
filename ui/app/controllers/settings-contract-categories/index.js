import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  categoriesList: computed('categories', function () {
    const { categories } = this;
    return categories
      .sort((cat1, cat2) => {
        const diffGroup = cat1.attributes.sequence - cat2.attributes.sequence;
        if (diffGroup) return diffGroup;

        return cat1.attributes.name.localeCompare(cat2.attributes.name);
      });
  }),
});
