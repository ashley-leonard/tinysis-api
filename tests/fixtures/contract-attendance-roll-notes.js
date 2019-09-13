// GET /api/notes?notableType=meetingParticipant&notableIds=1,2
export default {
  data: [
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for student Monahan / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for student Auer / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'serita@bartoletti.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '26',
              type: 'user',
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
