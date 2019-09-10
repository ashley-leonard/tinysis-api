// GET /api/profile
export default {
  data: {
    id: '25',
    type: 'user',
    attributes: {
      firstName: 'Jarrett',
      lastName: 'Kuphal',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'pamelia@blanda.biz',
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
