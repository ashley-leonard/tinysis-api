export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Funk',
        updatedAt: '2019-02-07T02:36:45.000Z',
        notableId: '3',
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
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note for Howell',
        updatedAt: '2019-02-07T02:36:45.000Z',
        notableId: '4',
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
        firstName: 'Kami',
        lastName: 'Watsica',
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
