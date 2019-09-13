// GET /api/notes?notableType=Status&notableIds=1,2,3,7,8,9
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Cruickshank for 2019-09-01 enrollment of Monahan in Titulus perferendis tripudio sumo blandior.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '23',
            type: 'User',
          },
        },
      },
    },
    {
      id: '12',
      type: 'note',
      attributes: {
        note: 'Note by Cruickshank for 2019-10-01 enrollment of Monahan in Titulus perferendis tripudio sumo blandior.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '23',
            type: 'User',
          },
        },
      },
    },
    {
      id: '13',
      type: 'note',
      attributes: {
        note: 'Note by Cruickshank for 2019-11-01 enrollment of Monahan in Titulus perferendis tripudio sumo blandior.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '23',
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
    {
      id: '23',
      type: 'user',
      attributes: {
        firstName: 'Theo',
        lastName: 'Cruickshank',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'leeanna@torp.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '27',
              type: 'user',
            },
            {
              id: '28',
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
