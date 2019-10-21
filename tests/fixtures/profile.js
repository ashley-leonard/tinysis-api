// GET /api/profile
export default {
  data: {
    id: '244',
    type: 'user',
    attributes: {
      firstName: 'Scotty',
      lastName: 'Mohr',
      nickname: null,
      dateActive: '2011-07-01',
      dateInactive: null,
      districtId: null,
      districtGrade: 12,
      email: 'brittturcotte@ohara.co',
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
      'manage:all-reporting',
      'manage:config',
      'manage:own-reporting',
      'read:config',
      'read:reporting',
    ],
  },
};
