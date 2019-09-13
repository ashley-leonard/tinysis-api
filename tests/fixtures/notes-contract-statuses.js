// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-09-01 enrollment of Monahan in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
    {
      id: '4',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-10-01 enrollment of Monahan in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
    {
      id: '5',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-11-01 enrollment of Monahan in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '22',
            type: 'User',
          },
        },
      },
    },
    {
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-09-01 enrollment of Auer in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '4',
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
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-10-01 enrollment of Auer in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
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
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by Sauer for 2019-11-01 enrollment of Auer in Molestias usque acervus talis cado.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
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
    count: 6,
  },
};
