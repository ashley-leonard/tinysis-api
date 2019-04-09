// GET /api/notes?notableType=Turnin&notableIds=1,2,3,4,5
export default {
  data: [
    {
      id: '57',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for student Buckridge / assignment 1',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '58',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for student Buckridge / assignment 2',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '59',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for student Buckridge / assignment 3',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '60',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for student Buckridge / assignment 4',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '61',
      type: 'note',
      attributes: {
        note: 'Note by Boyle for student Buckridge / assignment 5',
        updatedAt: '2019-04-09T04:38:09.000Z',
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
        firstName: 'Mark',
        lastName: 'Kuhn',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 5,
  },
};
