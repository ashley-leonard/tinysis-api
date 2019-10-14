// GET /api/notes?notableType=Status&notableIds=109,112
export default {
  data: [
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for Bahringer on 2019-09-01',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '64',
      type: 'note',
      attributes: {
        note: 'Note by Johnson for Bahringer on 2019-10-01',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'joy@schimmelmacejkovic.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
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
