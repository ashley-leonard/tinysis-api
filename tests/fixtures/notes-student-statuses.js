// GET /api/notes?notableType=Status&notableIds=103,106
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
    count: 2,
  },
};
