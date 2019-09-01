// GET /api/notes?notableType=Enrollment&notableIds=6,5
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Schinner for enrollment in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '5',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '104',
            type: 'User',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Medhurst for enrollment in Cupiditas alias cibo vobis textilis.',
        updatedAt: '2019-09-01T15:24:18.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '6',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '104',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'august@gradykaulke.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
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
