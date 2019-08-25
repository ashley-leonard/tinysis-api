// GET /api/profile
export default {
  data: {
    id: '4',
    type: 'user',
    attributes: {
      firstName: 'Cletus',
      lastName: 'Brekke',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'joannebauch@denesik.com',
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
