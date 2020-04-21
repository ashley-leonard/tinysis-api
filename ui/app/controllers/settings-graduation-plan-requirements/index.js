import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  tinyData: service(),
  queryParams: ['status'],
  status: 'active',
  statusOptions: computed(() => ([
    { name: 'All', value: 'all' },
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
  ])),
  countOfStatus: computed('status', 'graduationPlanRequirements', function () {
    const {
      status,
      graduationPlanRequirements,
    } = this;
    return graduationPlanRequirements.filter(req => req.attributes.status === status).length;
  }),
  actions: {
    updateSeries(series) {
      const { tinyData } = this;
      const data = series.map((req, i) => ({
        ...req,
        attributes: {
          ...req.attributes,
          position: i * 10,
        },
      }));
      tinyData.addResult({ data });
      return this.tinyData.fetch('/api/admin/graduation-plan-requirements/sort', {
        method: 'PUT',
        body: JSON.stringify({ data: data.map(req => ({ id: req.id })) }),
      });
    },
  },
});
