export default {
  data: [
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-09-01 enrollment of Ferry',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '16',
            type: 'status',
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
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-10-01 enrollment of Ferry',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '17',
            type: 'status',
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-11-01 enrollment of Ferry',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '18',
            type: 'status',
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
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-09-01 enrollment of Beer',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '19',
            type: 'status',
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
      id: '9',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-10-01 enrollment of Beer',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '20',
            type: 'status',
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
      id: '10',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2018-11-01 enrollment of Beer',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '21',
            type: 'status',
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
        firstName: 'Darci',
        lastName: 'Kuhic',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 6,
  },
};
