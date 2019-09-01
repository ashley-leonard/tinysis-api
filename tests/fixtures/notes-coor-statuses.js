// GET /api/notes?notableType=Status&notableIds=43,46,44,47,45,48
export default {
  data: [
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for Schinner on 2019-09-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Denesik for Aufderhar on 2019-09-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '105',
            type: 'User',
          },
        },
      },
    },
    {
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Denesik for Medhurst on 2019-09-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '105',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for Schinner on 2019-10-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '57',
      type: 'note',
      attributes: {
        note: 'Note by Denesik for Aufderhar on 2019-10-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '105',
            type: 'User',
          },
        },
      },
    },
    {
      id: '58',
      type: 'note',
      attributes: {
        note: 'Note by Denesik for Medhurst on 2019-10-01',
        updatedAt: '2019-09-01T15:24:18.000Z',
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
            id: '105',
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
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'linwoodoconner@breitenberg.io',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '109',
              type: 'student',
            },
            {
              id: '110',
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
