// GET /api/contracts
export default {
  data: [
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Quam charisma dolor absque tribuo.',
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
            id: '180',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '56',
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
          ],
        },
      },
    },
    {
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Textus animus versus temeritas antiquus.',
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
            id: '181',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '57',
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
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Vado veritas tenetur aspicio volup.',
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
            id: '180',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '58',
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
          ],
        },
      },
    },
    {
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Cui ambulo defungo totam dapifer.',
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
            id: '181',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '58',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '13',
              type: 'enrollment',
            },
            {
              id: '14',
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
              id: '8',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
              type: 'student',
            },
          ],
        },
      },
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
              id: '9',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'emilewindler@sanford.biz',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '185',
              type: 'student',
            },
            {
              id: '186',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 4,
  },
};
