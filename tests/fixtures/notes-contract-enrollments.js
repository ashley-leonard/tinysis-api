// GET /api/notes?notableType=Enrollment&notableIds=2,1
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Welch for enrollment in Unus exercitationem harum coruscus quo.',
        updatedAt: '2019-03-24T20:19:21.000Z',
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
        note: 'Note for Schneider for enrollment in Unus exercitationem harum coruscus quo.',
        updatedAt: '2019-03-24T20:19:21.000Z',
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
        firstName: 'Trinh',
        lastName: 'Reilly',
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
