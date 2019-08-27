// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  data: [
    {
      id: '57',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for student Schimmel / assignment 1',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '58',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for student Schimmel / assignment 2',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '59',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for student Schimmel / assignment 3',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '60',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for student Schimmel / assignment 4',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Jacobs for student Schimmel / assignment 5',
        updatedAt: '2019-08-27T04:01:08.000Z',
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
            id: '180',
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
  ],
  meta: {
    count: 5,
  },
};
