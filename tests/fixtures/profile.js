// GET /api/profile
export default {
  data: {
    id: '155',
    type: 'user',
    attributes: {
      firstName: 'Wiley',
      lastName: 'Wehner',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'collinhuel@paucekferry.io',
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
