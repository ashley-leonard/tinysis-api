export default {
  data: [
    {
      id: '35',
      type: 'note',
      attributes: {
        note: 'Note by Watsica for Funk on 2019-09-01',
        updatedAt: '2019-02-07T02:36:45.000Z',
        notableId: '230',
      },
      relationships: {
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
        note: 'Note by Rau for Powlowski on 2019-09-01',
        updatedAt: '2019-02-07T02:36:45.000Z',
        notableId: '231',
      },
      relationships: {
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
        note: 'Note by Rau for Howell on 2019-09-01',
        updatedAt: '2019-02-07T02:36:45.000Z',
        notableId: '232',
      },
      relationships: {
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
        note: 'Note by Watsica for Funk on 2019-10-01',
        updatedAt: '2019-02-07T02:36:46.000Z',
        notableId: '320',
      },
      relationships: {
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
        note: 'Note by Rau for Powlowski on 2019-10-01',
        updatedAt: '2019-02-07T02:36:46.000Z',
        notableId: '321',
      },
      relationships: {
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
        note: 'Note by Rau for Howell on 2019-10-01',
        updatedAt: '2019-02-07T02:36:46.000Z',
        notableId: '322',
      },
      relationships: {
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
        firstName: 'Kami',
        lastName: 'Watsica',
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
        firstName: 'Lulu',
        lastName: 'Rau',
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
