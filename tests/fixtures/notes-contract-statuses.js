// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-09-01 enrollment of Gislason in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
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
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-10-01 enrollment of Gislason in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
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
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-11-01 enrollment of Gislason in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
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
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-09-01 enrollment of Jenkins in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-10-01 enrollment of Jenkins in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
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
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Rolfson for 2019-11-01 enrollment of Jenkins in Verecundia vulgaris corroboro acidus verto.',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
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
    count: 6,
  },
};
