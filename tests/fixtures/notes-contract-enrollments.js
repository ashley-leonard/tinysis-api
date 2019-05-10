// GET /api/notes?notableType=Enrollment&notableIds=15,16
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Brekke for enrollment in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Goodwin for enrollment in Laboriosam denique coruscus fugit aggredior.',
        updatedAt: '2019-05-09T04:36:04.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '16',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '156',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Rory',
        lastName: 'Muller',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'qscm4ohqweb4',
        email: 'odell@hauck.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '160',
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
