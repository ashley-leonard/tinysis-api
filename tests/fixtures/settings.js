// GET /api/settings
export default {
  data: [
    {
      id: '90',
      type: 'setting',
      attributes: {
        name: 'current_year',
        value: '2019',
      },
    },
    {
      id: '88',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
      },
    },
    {
      id: '89',
      type: 'setting',
      attributes: {
        name: 'reporting_end_month',
        value: '6',
      },
    },
  ],
  meta: {
    count: 3,
  },
};
