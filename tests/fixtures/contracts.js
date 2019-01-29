export default {
  data: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Non cunae voluptas dignissimos cuppedia.',
        status: 'closed',
      },
      relationships: {
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
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
      },
    },
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Subnecto civis uterque denego acceptus.',
        status: 'closed',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '5',
              type: 'enrollment',
            },
          ],
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
        category: {
          data: {
            id: '2',
            type: 'category',
          },
        },
      },
    },
    {
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Sed sit audio terminatio blandior.',
        status: 'approved',
      },
      relationships: {
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
        category: {
          data: {
            id: '1',
            type: 'category',
          },
        },
      },
    },
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Accendo coadunatio unus strenuus dolores.',
        status: 'approved',
      },
      relationships: {
        enrollments: {
          data: [
            {
              id: '6',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '4',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
            type: 'category',
          },
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
        firstName: 'Joanne',
        lastName: 'Dicki',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
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
        firstName: 'Bella',
        lastName: 'Schowalter',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 4,
  },
};
