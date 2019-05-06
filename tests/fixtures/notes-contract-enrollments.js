// GET /api/notes?notableType=Enrollment&notableIds=1,2
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Gislason for enrollment in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
        note: 'Note for Jenkins for enrollment in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
        firstName: 'Perry',
        lastName: 'Rolfson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: '99riqb6cik3e',
        email: 'nidia@stroman.net',
        canLogin: false,
        isActive: true,
        role: 'staff',
        isAdmin: false,
        status: 'active',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
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
