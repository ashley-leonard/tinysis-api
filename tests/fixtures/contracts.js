// GET /api/contracts
export default {
  data: [
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Reiciendis ea viscus tabesco somniculosus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '6',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '94',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '13',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '17',
              type: 'enrollment',
            },
            {
              id: '18',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Damno ulciscor ut contego autem.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '14',
            type: 'term',
          },
        },
        enrollments: {
          data: [
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
    {
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Accusantium campana possimus pauci votum.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '14',
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
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Cubicularis aer templum caveo surgo.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '14',
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
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Animadverto totidem triduana decretum uberrime.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '6',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '94',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '15',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '11',
              type: 'enrollment',
            },
            {
              id: '12',
              type: 'enrollment',
            },
            {
              id: '13',
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
        name: 'Aestivus ciminatio voluptas solitudo curatio.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '15',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '14',
              type: 'enrollment',
            },
            {
              id: '15',
              type: 'enrollment',
            },
            {
              id: '16',
              type: 'enrollment',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '6',
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
              id: '6',
              type: 'contract',
            },
            {
              id: '10',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'joy@schimmelmacejkovic.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '13',
      type: 'term',
      attributes: {
        name: 'Virtual bandwidth-monitored architecture',
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
      id: '7',
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
              id: '7',
              type: 'contract',
            },
            {
              id: '8',
              type: 'contract',
            },
            {
              id: '9',
              type: 'contract',
            },
            {
              id: '11',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '95',
      type: 'user',
      attributes: {
        firstName: 'Walton',
        lastName: 'Jast',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'destiny@kuhickunde.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '99',
              type: 'user',
            },
            {
              id: '100',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '14',
      type: 'term',
      attributes: {
        name: 'Digitized analyzing leverage',
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
      id: '15',
      type: 'term',
      attributes: {
        name: 'Multi-channelled motivating flexibility',
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
