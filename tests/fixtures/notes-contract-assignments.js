// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  data: [
    {
      id: '59',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / assignment 1',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '60',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / assignment 2',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / assignment 3',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '62',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / assignment 4',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '187',
            type: 'User',
          },
        },
      },
    },
    {
      id: '63',
      type: 'note',
      attributes: {
        note: 'Note by Emmerich for student Baumbach / assignment 5',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
    count: 5,
  },
};
