// GET /api/notes?notableType=Status&notableIds=61,62,63,67,68,69
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2019-09-01 enrollment of Brekke in Attonbitus conturbo uxor sint placeat.',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '67',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '157',
            type: 'User',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2019-10-01 enrollment of Brekke in Attonbitus conturbo uxor sint placeat.',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '68',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '157',
            type: 'User',
          },
        },
      },
    },
    {
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for 2019-11-01 enrollment of Brekke in Attonbitus conturbo uxor sint placeat.',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '69',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '157',
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
    {
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Richard',
        lastName: 'Kuhic',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'a701gzbzzkjc',
        email: 'lacy@runolfonlowe.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '161',
              type: 'student',
            },
            {
              id: '162',
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
