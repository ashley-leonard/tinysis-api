// GET /api/notes?notableType=Status&notableIds=109,112,110,113,111,114
export default {
  data: [
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for Dietrich on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '109',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for Murphy on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '110',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
      },
    },
    {
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for Kutch on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '111',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
      },
    },
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Mayer for Dietrich on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '112',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
      },
    },
    {
      id: '65',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for Murphy on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '113',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
      },
    },
    {
      id: '66',
      type: 'note',
      attributes: {
        note: 'Note by Ritchie for Kutch on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '114',
            type: 'status',
          },
        },
        creator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '242',
      type: 'user',
      attributes: {
        firstName: 'Hector',
        lastName: 'Ritchie',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ethelkris@dicki.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '246',
              type: 'user',
            },
            {
              id: '247',
              type: 'user',
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
