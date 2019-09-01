// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  data: [
    {
      id: '59',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / assignment 1',
        updatedAt: '2019-09-01T15:24:19.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'turnin',
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
      id: '60',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / assignment 2',
        updatedAt: '2019-09-01T15:24:19.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'turnin',
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
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / assignment 3',
        updatedAt: '2019-09-01T15:24:19.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
            type: 'turnin',
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
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / assignment 4',
        updatedAt: '2019-09-01T15:24:19.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
            type: 'turnin',
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
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by Mosciski for student Schinner / assignment 5',
        updatedAt: '2019-09-01T15:24:19.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
            type: 'turnin',
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
    count: 5,
  },
};
