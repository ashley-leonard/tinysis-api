// GET /api/notes?notableType=meetingParticipant&notableIds=1,2,3
export default {
  data: [
    {
      id: '72',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for student Dietrich / meeting 1',
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
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '73',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for student Murphy / meeting 1',
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
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '74',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for student Kutch / meeting 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'meetingParticipant',
          },
        },
        creator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
