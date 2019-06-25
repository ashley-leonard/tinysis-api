// GET /api/notes?notableType=Enrollment&notableIds=2,1
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Rohan for enrollment in Templum provident corporis apto conspergo.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '1',
            type: 'enrollment',
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
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Maggio for enrollment in Templum provident corporis apto conspergo.',
        updatedAt: '2019-06-24T02:51:25.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '2',
            type: 'enrollment',
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
  ],
  meta: {
    count: 2,
  },
};
