// GET /api/contracts
export default {
  data: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Cogo confugo ad alioqui videlicet.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '1',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '5',
              type: 'enrollment',
            },
            {
              id: '6',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Curatio arbor magnam decens adhaero.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '7',
              type: 'enrollment',
            },
            {
              id: '8',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Verecundia vulgaris corroboro acidus verto.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '3',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '1',
              type: 'enrollment',
            },
            {
              id: '2',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Delicate tantillus tabernus cum cui.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '3',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '3',
              type: 'enrollment',
            },
            {
              id: '4',
              type: 'enrollment',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        homeroom: false,
        statusable: false,
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Perry',
        lastName: 'Rolfson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: '99riqb6cik3e',
        email: 'nidia@stroman.net',
        canLogin: false,
        isActive: true,
        role: 'staff',
        isAdmin: false,
        status: 'active',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'category',
      attributes: {
        name: 'Category 2',
        sequence: 0,
        public: false,
        homeroom: false,
        statusable: false,
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Fermin',
        lastName: 'Ziemann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'cph16wxjdeiv',
        email: 'corrina@beier.com',
        canLogin: false,
        isActive: true,
        role: 'staff',
        isAdmin: false,
        status: 'active',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'student',
            },
            {
              id: '7',
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
