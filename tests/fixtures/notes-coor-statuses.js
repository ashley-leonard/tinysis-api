export default {
  data: [
    {
      id: '35',
      type: 'note',
      attributes: {
        note: 'Note by Gleichner for Okuneva on 2019-09-01',
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        note: "Note by Ledner for O'Keefe on 2019-09-01",
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        note: 'Note by Ledner for Boyle on 2019-09-01',
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        note: 'Note by Gleichner for Okuneva on 2019-10-01',
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        note: "Note by Ledner for O'Keefe on 2019-10-01",
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        note: 'Note by Ledner for Boyle on 2019-10-01',
        updatedAt: '2019-03-04T03:01:37.000Z',
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
        firstName: 'Sharonda',
        lastName: 'Gleichner',
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
        firstName: 'Marty',
        lastName: 'Ledner',
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
