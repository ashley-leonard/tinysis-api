// GET /api/notes?notableType=meetingParticipant&notableIds=1,2
export default {
  data: [
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / meeting 1',
        updatedAt: '2019-09-01T15:24:19.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Medhurst / meeting 1',
        updatedAt: '2019-09-01T15:24:19.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'august@gradykaulke.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
