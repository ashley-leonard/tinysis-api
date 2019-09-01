// GET /api/profile
export default {
  data: {
    id: '107',
    type: 'user',
    attributes: {
      firstName: 'Eileen',
      lastName: 'Wilkinson',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'tommie@bernhard.com',
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
