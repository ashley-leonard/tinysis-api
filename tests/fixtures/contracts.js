// GET /api/contracts
export default {
  data: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Ambulo delectatio vomica ad truculenter.',
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
        name: 'Autem alioqui victus admoneo cur.',
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
        name: 'Cenaculum tabgo deorsum tergum conculco.',
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
        name: 'Canonicus commodo eum aut angustus.',
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
        firstName: 'Mark',
        lastName: 'Kuhn',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
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
        firstName: 'Scottie',
        lastName: 'Zieme',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 4,
  },
};
