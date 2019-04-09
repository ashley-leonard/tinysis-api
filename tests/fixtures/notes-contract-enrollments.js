// GET /api/notes?notableType=Enrollment&notableIds=1,2
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Buckridge for enrollment in Pel crapula venustas repellat tametsi.',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
        note: 'Note for Doyle for enrollment in Pel crapula venustas repellat tametsi.',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
