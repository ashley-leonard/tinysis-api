// GET /api/notes?notableType=Status&notableIds=43,46
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Bauch for Greenholt on 2019-09-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '43',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Bauch for Greenholt on 2019-10-01',
        updatedAt: '2019-03-27T15:15:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '46',
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
        firstName: 'Mark',
        lastName: 'Kuhn',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 2,
  },
};
