// GET /api/notes?notableType=Status&notableIds=103,106,104,107,105,108
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Muller for Brekke on 2019-09-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '103',
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
      id: '52',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Waters on 2019-09-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '104',
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
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Goodwin on 2019-09-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '105',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Muller for Brekke on 2019-10-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '106',
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
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Waters on 2019-10-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '107',
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
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Kuhic for Goodwin on 2019-10-01',
        updatedAt: '2019-05-09T04:36:05.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '108',
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
