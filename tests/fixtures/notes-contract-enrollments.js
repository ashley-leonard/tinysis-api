export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Zemlak',
        updatedAt: '2019-02-25T04:39:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'enrollment',
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
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note for Lueilwitz',
        updatedAt: '2019-02-25T04:39:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
            type: 'enrollment',
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
        firstName: 'Jaime',
        lastName: 'Frami',
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
