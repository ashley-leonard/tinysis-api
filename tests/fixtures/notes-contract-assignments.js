export default {
  data: [
    {
      id: '128',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for student Okuneva / assignment 1',
        updatedAt: '2019-03-04T03:01:37.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'turnin',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '129',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for student Okuneva / assignment 2',
        updatedAt: '2019-03-04T03:01:37.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'turnin',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '130',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for student Okuneva / assignment 3',
        updatedAt: '2019-03-04T03:01:37.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'turnin',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '131',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for student Okuneva / assignment 4',
        updatedAt: '2019-03-04T03:01:37.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
            type: 'turnin',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '132',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for student Okuneva / assignment 5',
        updatedAt: '2019-03-04T03:01:37.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
            type: 'turnin',
          },
        },
        creator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Sharonda',
        lastName: 'Gleichner',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 5,
  },
};
