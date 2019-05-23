// GET /api/terms?limit=20&order=name&include=usage
export default {
  data: [
    {
      id: '6',
      type: 'term',
      attributes: {
        name: 'COOR Current',
        schoolYear: 2019,
        creditDate: null,
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
          '2020-02-01',
          '2020-03-01',
          '2020-04-01',
          '2020-05-01',
          '2020-06-01',
        ],
        status: 'active',
      },
      meta: {
        contractsCount: 0,
        enrollmentsCount: 0,
        enrollmentsOpenCount: 0,
      },
    },
    {
      id: '5',
      type: 'term',
      attributes: {
        name: 'COOR Last',
        schoolYear: 2018,
        creditDate: null,
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'inactive',
      },
      meta: {
        contractsCount: 0,
        enrollmentsCount: 0,
        enrollmentsOpenCount: 0,
      },
    },
    {
      id: '3',
      type: 'term',
      attributes: {
        name: 'Current One',
        schoolYear: 2019,
        creditDate: '2020-01-31',
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
        ],
        status: 'active',
      },
      meta: {
        contractsCount: 2,
        enrollmentsCount: 4,
        enrollmentsOpenCount: 4,
      },
    },
    {
      id: '4',
      type: 'term',
      attributes: {
        name: 'Current Two',
        schoolYear: 2019,
        creditDate: '2020-06-15',
        months: [
          '2020-02-01',
          '2020-03-01',
          '2020-04-01',
          '2020-05-01',
          '2020-06-01',
        ],
        status: 'active',
      },
      meta: {
        contractsCount: 0,
        enrollmentsCount: 0,
        enrollmentsOpenCount: 0,
      },
    },
    {
      id: '1',
      type: 'term',
      attributes: {
        name: 'Last One',
        schoolYear: 2018,
        creditDate: '2019-01-31',
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
        ],
        status: 'active',
      },
      meta: {
        contractsCount: 1,
        enrollmentsCount: 2,
        enrollmentsOpenCount: 0,
      },
    },
    {
      id: '2',
      type: 'term',
      attributes: {
        name: 'Last Two',
        schoolYear: 2018,
        creditDate: '2019-06-15',
        months: [
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'active',
      },
      meta: {
        contractsCount: 1,
        enrollmentsCount: 2,
        enrollmentsOpenCount: 0,
      },
    },
  ],
  meta: {
    count: 6,
  },
};
