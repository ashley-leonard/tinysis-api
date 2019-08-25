// GET /api/notes?notableType=Enrollment&notableIds=1,2
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Pfannerstill for enrollment in Videlicet curso voco cena vorago.',
        updatedAt: '2019-08-13T04:44:33.000Z',
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
        note: 'Note for Simonis for enrollment in Videlicet curso voco cena vorago.',
        updatedAt: '2019-08-13T04:44:33.000Z',
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
        firstName: 'Crista',
        lastName: 'Hansen',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'zachariaheffertz@oreilly.name',
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
