// GET /api/notes?notableType=Enrollment&notableIds=1,2
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Haley for enrollment in Cenaculum tabgo deorsum tergum conculco.',
        updatedAt: '2019-04-08T03:42:21.000Z',
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
        note: 'Note for Hilll for enrollment in Cenaculum tabgo deorsum tergum conculco.',
        updatedAt: '2019-04-08T03:42:21.000Z',
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
