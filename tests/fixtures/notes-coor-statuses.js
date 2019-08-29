// GET /api/notes?notableType=Status&notableIds=103,106,104,107,105,108
export default {
  data: [
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for Turner on 2019-09-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for Schoen on 2019-09-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
    {
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for Bogan on 2019-09-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for Turner on 2019-10-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '57',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for Schoen on 2019-10-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
    {
      id: '58',
      type: 'note',
      attributes: {
        note: 'Note by Trantow for Bogan on 2019-10-01',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '153',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'aron@heel.org',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
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
