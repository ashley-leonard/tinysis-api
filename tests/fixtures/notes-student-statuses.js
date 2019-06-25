// GET /api/notes?notableType=Status&notableIds=43,46
export default {
  data: [
    {
      id: '51',
      type: 'note',
      attributes: {
        note: 'Note by Stoltenberg for Rohan on 2019-09-01',
        updatedAt: '2019-06-24T02:51:25.000Z',
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
      id: '54',
      type: 'note',
      attributes: {
        note: 'Note by Stoltenberg for Rohan on 2019-10-01',
        updatedAt: '2019-06-24T02:51:25.000Z',
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
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Donald',
        lastName: 'Stoltenberg',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'chase@hellerjohnson.info',
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
  ],
  meta: {
    count: 2,
  },
};
