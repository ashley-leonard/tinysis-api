// GET /api/profile
export default {
  data: {
    id: '97',
    type: 'user',
    attributes: {
      firstName: 'Claretha',
      lastName: 'Gusikowski',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'domingowalter@walker.io',
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
