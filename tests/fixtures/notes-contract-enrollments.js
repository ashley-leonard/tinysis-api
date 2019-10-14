// GET /api/notes?notableType=Enrollment&notableIds=11,12,13
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Bahringer for enrollment in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Kunze for enrollment in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '94',
            type: 'User',
          },
        },
      },
    },
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Mann for enrollment in Animadverto totidem triduana decretum uberrime.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '13',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '94',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'joy@schimmelmacejkovic.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 3,
  },
};
