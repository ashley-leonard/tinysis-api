// GET /api/notes?notableType=Enrollment&notableIds=5,6,7
export default {
  data: [
    {
      id: '1',
      type: 'note',
      attributes: {
        note: 'Note for Bednar for enrollment in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '2',
      type: 'note',
      attributes: {
        note: 'Note for Pollich for enrollment in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
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
            id: '7',
            type: 'User',
          },
        },
      },
    },
    {
      id: '3',
      type: 'note',
      attributes: {
        note: 'Note for Yundt for enrollment in Demergo somnus denuncio tamen solitudo.',
        updatedAt: '2019-11-15T00:00:00.000Z',
      },
      relationships: {
        notable: {
          data: {
            id: '7',
            type: 'enrollment',
          },
        },
        creator: {
          data: {
            id: '7',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'janelle@rathskiles.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '11',
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
