// GET /api/settings
export default {
  data: [
    {
      id: '60',
      type: 'setting',
      attributes: {
        name: 'current_year',
        value: '2019',
      },
    },
    {
      id: '58',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
      },
    },
    {
      id: '59',
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
