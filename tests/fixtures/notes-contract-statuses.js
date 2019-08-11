// GET /api/notes?notableType=Status&notableIds=1,2,3,4,5,6
export default {
  data: [
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for 2019-09-01 enrollment of Ratke in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by McLaughlin for 2019-10-01 enrollment of Ratke in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by McLaughlin for 2019-11-01 enrollment of Ratke in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
      id: '6',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for 2019-09-01 enrollment of Blanda in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '7',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for 2019-10-01 enrollment of Blanda in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
            id: '1',
            type: 'User',
          },
        },
      },
    },
    {
      id: '8',
      type: 'note',
      attributes: {
        note: 'Note by McLaughlin for 2019-11-01 enrollment of Blanda in Spectaculum magnam eaque harum utrimque.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'stellawilderman@aufderhar.com',
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
    count: 6,
  },
};
