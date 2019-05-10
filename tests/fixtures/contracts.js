// GET /api/contracts
export default {
  data: [
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Adnuo consequuntur stella vito neque.',
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
            id: '156',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '28',
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
      id: '11',
      type: 'contract',
      attributes: {
        name: 'Beatae delibero adulescens tempus conitor.',
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
            id: '157',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '29',
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
      id: '12',
      type: 'contract',
      attributes: {
        name: 'Laboriosam denique coruscus fugit aggredior.',
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
            id: '156',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '30',
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
      id: '13',
      type: 'contract',
      attributes: {
        name: 'Attonbitus conturbo uxor sint placeat.',
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
            id: '157',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '30',
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
  ],
  included: [
    {
      id: '8',
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
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Rory',
        lastName: 'Muller',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'qscm4ohqweb4',
        email: 'odell@hauck.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '160',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '9',
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
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Richard',
        lastName: 'Kuhic',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'a701gzbzzkjc',
        email: 'lacy@runolfonlowe.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '161',
              type: 'student',
            },
            {
              id: '162',
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
