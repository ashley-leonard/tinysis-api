import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tinyData: service(),
  tagName: '',
  requirementsList: computed('graduationPlanRequirements', function () {
    const {
      requirementType,
      graduationPlanRequirements,
    } = this;

    let list = graduationPlanRequirements;

    if (requirementType) {
      list = list.filter(req => req.attributes.requirementType === requirementType);
    }

    return list
      .filter(req => !req.relationships.parent.data)
      .sort((req1, req2) => req1.attributes.position - req2.attributes.position);
  }),
  actions: {
    onDrop(target, item) {
      const {
        graduationPlanRequirements,
        tinyData,
      } = this;

      let series;
      const parentId = get(item, 'relationships.parent.data.id');
      if (parentId) {
        series = graduationPlanRequirements
          .filter(req => parentId === get(req, 'relationships.parent.data.id'));
      } else {
        series = graduationPlanRequirements
          .filter(req => !get(req, 'relationships.parent.data'));
      }

      series = series.sort((req1, req2) => req1.attributes.position - req2.attributes.position);

      const iTarget = series.findIndex(req => req.id === target.id);
      const iItem = series.findIndex(req => req.id === item.id);

      series[iItem] = null;

      const newSeries = [];
      for (let i = 0; i <= iTarget; i += 1) {
        if (series[i]) newSeries.push(series[i]);
      }
      newSeries.push({
        ...item,
        attributes: {
          ...item.attributes,
          position: target.attributes.position + 1,
        },
      });
      for (let i = iTarget + 1; i < series.length; i += 1) {
        if (series[i]) newSeries.push(series[i]);
      }

      this.updateSeries(newSeries);

      this.set('graduationPlanRequirements', graduationPlanRequirements.map(req => tinyData.get('graduationPlanRequirement', req.id)));
    },
  },
});
