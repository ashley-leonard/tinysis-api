export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Ferry',
        updatedAt: '2019-03-18T05:19:16.000Z',
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
        note: 'Note for Beer',
        updatedAt: '2019-03-18T05:19:16.000Z',
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
    count: 2,
  },
};
