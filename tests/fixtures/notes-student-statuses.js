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
