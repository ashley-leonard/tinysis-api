// GET /api/notes?notableType=meetingParticipant&notableIds=1,2
export default {
  data: [
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Macejkovic for student Haley / meeting 1',
        updatedAt: '2019-04-08T03:42:22.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'meetingParticipant',
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
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by Macejkovic for student Hilll / assignment 1',
        updatedAt: '2019-04-08T03:42:22.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'meetingParticipant',
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
