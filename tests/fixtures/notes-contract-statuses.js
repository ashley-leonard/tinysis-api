// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-09-01 enrollment of Schinner in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-10-01 enrollment of Schinner in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-11-01 enrollment of Schinner in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-09-01 enrollment of Medhurst in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-10-01 enrollment of Medhurst in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for 2019-11-01 enrollment of Medhurst in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
    count: 6,
  },
};
