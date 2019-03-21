export default {
  data: [
    {
      id: '44',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Ferry on 2019-09-01',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '55',
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
      id: '47',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Ferry on 2019-10-01',
        updatedAt: '2019-03-18T05:19:16.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '58',
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
    count: 2,
  },
};
