export default {
  data: [
    {
      id: '31',
      type: 'note',
      attributes: {
        note: 'Note by Dicki for Robel on 2019-09-01',
        updatedAt: '2019-01-28T05:56:14.000Z',
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
        note: 'Note by Dicki for Robel on 2019-10-01',
        updatedAt: '2019-01-28T05:56:15.000Z',
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
        firstName: 'Joanne',
        lastName: 'Dicki',
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
