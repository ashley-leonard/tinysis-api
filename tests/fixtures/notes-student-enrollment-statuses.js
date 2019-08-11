// GET /api/notes?notableType=Status&notableIds=1,2,3,7,8,9
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
      id: '11',
      type: 'note',
      attributes: {
        note: 'Note by Davis for 2019-09-01 enrollment of Ratke in Chirographum vulnus considero dens textilis.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for 2019-10-01 enrollment of Ratke in Chirographum vulnus considero dens textilis.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        note: 'Note by Davis for 2019-11-01 enrollment of Ratke in Chirographum vulnus considero dens textilis.',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Mikel',
        lastName: 'Davis',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'vicenta@moenrowe.io',
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
