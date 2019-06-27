// GET /api/notes?notableType=Status&notableIds=1,2,3,7,8,9
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Stoltenberg for 2019-09-01 enrollment of Rohan in Templum provident corporis apto conspergo.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
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
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Stoltenberg for 2019-10-01 enrollment of Rohan in Templum provident corporis apto conspergo.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
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
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Stoltenberg for 2019-11-01 enrollment of Rohan in Templum provident corporis apto conspergo.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '3',
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Champlin for 2019-09-01 enrollment of Rohan in Cunctatio rerum quisquam defigo testimonium.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '7',
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
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Champlin for 2019-10-01 enrollment of Rohan in Cunctatio rerum quisquam defigo testimonium.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '8',
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
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Champlin for 2019-11-01 enrollment of Rohan in Cunctatio rerum quisquam defigo testimonium.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '9',
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
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Keven',
        lastName: 'Champlin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'denis@macejkovic.com',
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
