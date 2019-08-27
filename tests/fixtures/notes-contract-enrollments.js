// GET /api/notes?notableType=Enrollment&notableIds=12,11
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Schimmel for enrollment in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '11',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Gulgowski for enrollment in Vado veritas tenetur aspicio volup.',
        updatedAt: '2019-08-27T04:01:08.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '12',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '180',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
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
