// GET /api/admin/users?include=coordinator&limit=20&order=lastName,firstName,nickname
export default {
  data: [
    {
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
        status: 'active',
        role: 'administrator',
        email: 'joannebauch@denesik.com',
      },
      relationships: {
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Crista',
        lastName: 'Hansen',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'zachariaheffertz@oreilly.name',
      },
      relationships: {
      },
    },
    {
      id: '3',
      type: 'user',
      attributes: {
        firstName: 'Herman',
        lastName: 'Hickle',
        nickname: null,
        dateActive: '2011-02-01',
        dateInactive: '2018-01-01',
        districtId: null,
        districtGrade: 12,
        status: 'inactive',
        role: 'staff',
        email: 'leora@ohara.info',
      },
      relationships: {
      },
    },
    {
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Eliana',
        lastName: 'Pfannerstill',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '9816947609',
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
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Winston',
        lastName: 'Simonis',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: '2019-10-01',
        districtId: '9798983283',
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
      id: '6',
      type: 'user',
      attributes: {
        firstName: 'Khalilah',
        lastName: 'Strosin',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '4232569079',
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
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Garry',
        lastName: 'Terry',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'billie@durganmckenzie.name',
      },
      relationships: {
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Crista',
        lastName: 'Hansen',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'zachariaheffertz@oreilly.name',
      },
      relationships: {
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Garry',
        lastName: 'Terry',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        status: 'active',
        role: 'staff',
        email: 'billie@durganmckenzie.name',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 7,
  },
};
