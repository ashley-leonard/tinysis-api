// GET /api/settings
export default {
  data: [
    {
      id: '105',
      type: 'setting',
      attributes: {
        name: 'current_year',
        value: '2019',
      },
    },
    {
      id: '103',
      type: 'setting',
      attributes: {
        name: 'reporting_base_month',
        value: '9',
      },
    },
    {
      id: '104',
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
