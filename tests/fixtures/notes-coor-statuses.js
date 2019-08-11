// GET /api/notes?notableType=Status&notableIds=43,46,44,47,45,48
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for Ratke on 2019-09-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for Bartoletti on 2019-09-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for Blanda on 2019-09-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by McLaughlin for Ratke on 2019-10-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for Bartoletti on 2019-10-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for Blanda on 2019-10-01',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'stellawilderman@aufderhar.com',
        status: 'active',
        role: 'staff',
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
        firstName: 'Mikel',
        lastName: 'Davis',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'vicenta@moenrowe.io',
        status: 'active',
        role: 'staff',
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
