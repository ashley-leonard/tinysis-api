export default {
  data: [
    {
      id: '31',
      type: 'note',
      attributes: {
        note: 'Note by Okuneva for Kemmer on 2019-09-01',
        updatedAt: '2019-02-04T04:40:28.000Z',
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
      id: '121',
      type: 'note',
      attributes: {
        note: 'Note by Okuneva for Kemmer on 2019-10-01',
        updatedAt: '2019-02-04T04:40:28.000Z',
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
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Ed',
        lastName: 'Okuneva',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 2,
  },
};
