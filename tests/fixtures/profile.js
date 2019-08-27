// GET /api/profile
export default {
  data: {
    id: '183',
    type: 'user',
    attributes: {
      firstName: 'Nestor',
      lastName: 'Jacobi',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'paz@schmidtstark.biz',
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
