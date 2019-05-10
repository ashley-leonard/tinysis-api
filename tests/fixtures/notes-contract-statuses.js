// GET /api/notes?notableType=Status&notableIds=61,62,63,64,65,66
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-09-01 enrollment of Brekke in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '61',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-10-01 enrollment of Brekke in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '62',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-11-01 enrollment of Brekke in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '63',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-09-01 enrollment of Goodwin in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '64',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-10-01 enrollment of Goodwin in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '65',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Muller for 2019-11-01 enrollment of Goodwin in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '66',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Rory',
        lastName: 'Muller',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'qscm4ohqweb4',
        email: 'odell@hauck.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '160',
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
