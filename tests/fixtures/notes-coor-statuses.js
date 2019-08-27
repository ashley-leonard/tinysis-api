// GET /api/notes?notableType=Status&notableIds=103,106,104,107,105,108
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for Schimmel on 2019-09-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '52',
      type: 'note',
      attributes: {
        note: 'Note by Cremin for Witting on 2019-09-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '181',
            type: 'User',
          },
        },
      },
    },
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Cremin for Gulgowski on 2019-09-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '181',
            type: 'User',
          },
        },
      },
    },
    {
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for Schimmel on 2019-10-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '55',
      type: 'note',
      attributes: {
        note: 'Note by Cremin for Witting on 2019-10-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '181',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Cremin for Gulgowski on 2019-10-01',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '181',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'emilewindler@sanford.biz',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '185',
              type: 'student',
            },
            {
              id: '186',
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
