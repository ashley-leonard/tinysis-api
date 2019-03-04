export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Okuneva',
        updatedAt: '2019-03-04T03:01:36.000Z',
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
        note: 'Note for Boyle',
        updatedAt: '2019-03-04T03:01:36.000Z',
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
    count: 2,
  },
};
