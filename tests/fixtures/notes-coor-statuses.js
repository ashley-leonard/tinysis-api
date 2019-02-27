export default {
  data: [
    {
      id: '35',
      type: 'note',
      attributes: {
        note: 'Note by Frami for Zemlak on 2019-09-01',
        updatedAt: '2019-02-25T04:39:06.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '230',
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
      id: '36',
      type: 'note',
      attributes: {
        note: 'Note by Cartwright for Rowe on 2019-09-01',
        updatedAt: '2019-02-25T04:39:06.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '231',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '37',
      type: 'note',
      attributes: {
        note: 'Note by Cartwright for Lueilwitz on 2019-09-01',
        updatedAt: '2019-02-25T04:39:06.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '232',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '125',
      type: 'note',
      attributes: {
        note: 'Note by Frami for Zemlak on 2019-10-01',
        updatedAt: '2019-02-25T04:39:07.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '320',
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
      id: '126',
      type: 'note',
      attributes: {
        note: 'Note by Cartwright for Rowe on 2019-10-01',
        updatedAt: '2019-02-25T04:39:07.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '321',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '127',
      type: 'note',
      attributes: {
        note: 'Note by Cartwright for Lueilwitz on 2019-10-01',
        updatedAt: '2019-02-25T04:39:07.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '322',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
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
    count: 6,
  },
};
