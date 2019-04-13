// GET /api/notes?notableType=Enrollment&notableIds=2,1
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for DuBuque for enrollment in Atque deorsum textus occaecati ascit.',
        updatedAt: '2019-04-12T23:43:34.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
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
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Collins for enrollment in Atque deorsum textus occaecati ascit.',
        updatedAt: '2019-04-12T23:43:34.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
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
        firstName: 'Gabriella',
        lastName: 'Hegmann',
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
