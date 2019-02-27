export default {
  data: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Carcer tactus auris vitiosus viriliter.',
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
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Abscido vere surgo eos deripio.',
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
              id: '5',
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
        name: 'Contego uterque defendo accedo fugit.',
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
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Acquiro terminatio rerum tactus ventosus.',
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
            id: '4',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '6',
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
        firstName: 'Jaime',
        lastName: 'Frami',
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
        firstName: 'Reagan',
        lastName: 'Cartwright',
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
