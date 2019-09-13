// GET /api/notes?notableType=Status&notableIds=43,46
export default {
  data: [
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for Monahan on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for Monahan on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'serita@bartoletti.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '26',
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
