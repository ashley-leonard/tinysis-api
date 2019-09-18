// GET /api/profile
export default {
  data: {
    id: '190',
    type: 'user',
    attributes: {
      firstName: 'Shaun',
      lastName: 'Stokes',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'belinda@lueilwitzbartoletti.com',
      status: 'active',
      role: 'administrator',
    },
    relationships: {
      coordinatees: {
        data: [

        ],
      },
    },
  },
  meta: {
    permissions: [
      'get:config',
      'manage:config',
    ],
  },
};
