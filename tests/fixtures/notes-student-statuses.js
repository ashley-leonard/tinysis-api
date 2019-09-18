// GET /api/notes?notableType=Status&notableIds=103,106
export default {
  data: [
    {
      id: '53',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for Baumbach on 2019-09-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '56',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for Baumbach on 2019-10-01',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '187',
      type: 'user',
      attributes: {
        firstName: 'Judson',
        lastName: 'Emmerich',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
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
