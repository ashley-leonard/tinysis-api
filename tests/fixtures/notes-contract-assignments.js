// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  data: [
    {
      id: '59',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / assignment 1',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '60',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / assignment 2',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / assignment 3',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / assignment 4',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
            type: 'User',
          },
        },
      },
    },
    {
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by Lehner for student Turner / assignment 5',
        updatedAt: '2019-08-28T19:17:09.000Z',
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
            id: '152',
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
  ],
  meta: {
    count: 5,
  },
};
