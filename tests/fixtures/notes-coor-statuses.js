// GET /api/notes?notableType=Status&notableIds=43,46,44,47,45,48
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
      id: '52',
      type: 'note',
      attributes: {
        note: 'Note by Ziemann for Mraz on 2019-09-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '44',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Ziemann for Jenkins on 2019-09-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '45',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
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
    {
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Ziemann for Mraz on 2019-10-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '47',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Ziemann for Jenkins on 2019-10-01',
        updatedAt: '2019-05-05T14:05:47.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '48',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '2',
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
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Fermin',
        lastName: 'Ziemann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'cph16wxjdeiv',
        email: 'corrina@beier.com',
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
              id: '6',
              type: 'student',
            },
            {
              id: '7',
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
