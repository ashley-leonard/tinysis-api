// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Oswaldo',
        lastName: 'Bartoletti',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5571345198',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Zetta',
        lastName: 'Blanda',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '2333436592',
        districtGrade: 12,
        status: 'inactive',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Mikel',
        lastName: 'Davis',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'vicenta@moenrowe.io',
      },
      relationships: {
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Nolan',
        lastName: 'Donnelly',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'lorean@okonadams.name',
      },
      relationships: {
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'stellawilderman@aufderhar.com',
      },
      relationships: {
      },
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Zachery',
        lastName: 'Ratke',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4824754434',
        districtGrade: 12,
        status: 'active',
        role: 'student',
        email: null,
      },
      relationships: {
        coordinator: {
          data: {
            id: '1',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Enola',
        lastName: 'Shields',
        nickname: null,
        dateActive: '2011-07-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'administrator',
        email: 'junie@carroll.io',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Mikel',
        lastName: 'Davis',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'vicenta@moenrowe.io',
      },
      relationships: {
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'stellawilderman@aufderhar.com',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
