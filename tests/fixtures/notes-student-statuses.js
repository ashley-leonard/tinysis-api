// GET /api/notes?notableType=Status&notableIds=43,46
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for Gislason on 2019-09-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '43',
            type: 'status',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for Gislason on 2019-10-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '46',
            type: 'status',
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
