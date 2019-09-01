// GET /api/contracts
export default {
  data: [
    {
      id: '5',
      type: 'contract',
      attributes: {
        name: 'Harum aptus alii timidus cervus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '3',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '104',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '48',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '9',
              type: 'enrollment',
            },
            {
              id: '10',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Accusator debeo cubo adsuesco certus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '105',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '49',
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
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Dolor audax vulgus vestigium ara.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '105',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '49',
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
    {
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Custodia voluptatibus soluta suasoria conqueror.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '105',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '49',
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
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Cupiditas alias cibo vobis textilis.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '3',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '104',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '50',
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
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Et bestia solio labore adficio.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '105',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '50',
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
  ],
  included: [
    {
      id: '3',
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
              id: '5',
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
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'august@gradykaulke.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '4',
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
              id: '6',
              type: 'contract',
            },
            {
              id: '7',
              type: 'contract',
            },
            {
              id: '8',
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
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'linwoodoconner@breitenberg.io',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '109',
              type: 'student',
            },
            {
              id: '110',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 6,
  },
};
