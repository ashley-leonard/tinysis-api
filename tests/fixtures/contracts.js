// GET /api/contracts
export default {
  data: [
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Crepusculum sodalitas similique cohibeo depulso.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '8',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '60',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '21',
              type: 'enrollment',
            },
            {
              id: '22',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '11',
      type: 'contract',
      attributes: {
        name: 'Compono amiculum cupiditate urbs defessus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '23',
              type: 'enrollment',
            },
            {
              id: '24',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '12',
      type: 'contract',
      attributes: {
        name: 'Conculco angustus tempus toties dicta.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '25',
              type: 'enrollment',
            },
            {
              id: '26',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '13',
      type: 'contract',
      attributes: {
        name: 'Aggredior distinctio possimus acer decimus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        enrollments: {
          data: [

          ],
        },
      },
    },
    {
      id: '14',
      type: 'contract',
      attributes: {
        name: 'Fugit repellat trans voluptatibus decens.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '8',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '15',
              type: 'enrollment',
            },
            {
              id: '16',
              type: 'enrollment',
            },
            {
              id: '17',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Vulgo coruscus crastinus omnis admitto.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '9',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '18',
              type: 'enrollment',
            },
            {
              id: '19',
              type: 'enrollment',
            },
            {
              id: '20',
              type: 'enrollment',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '8',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '10',
              type: 'contract',
            },
            {
              id: '14',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '60',
      type: 'term',
      attributes: {
        name: 'Adaptive 6th generation function',
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
      meta: null,
    },
    {
      id: '9',
      type: 'category',
      attributes: {
        name: 'Category 2',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '11',
              type: 'contract',
            },
            {
              id: '12',
              type: 'contract',
            },
            {
              id: '13',
              type: 'contract',
            },
            {
              id: '15',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '242',
      type: 'user',
      attributes: {
        firstName: 'Hector',
        lastName: 'Ritchie',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ethelkris@dicki.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '246',
              type: 'user',
            },
            {
              id: '247',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '61',
      type: 'term',
      attributes: {
        name: 'Balanced content-based open architecture',
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
      meta: null,
    },
    {
      id: '62',
      type: 'term',
      attributes: {
        name: 'Extended local flexibility',
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
      meta: null,
    },
  ],
  meta: {
    count: 6,
  },
};
