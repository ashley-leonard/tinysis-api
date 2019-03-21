export default {
  data: [
    {
      id: '55',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-03-18T05:19:16.000Z',
        updatedAt: '2019-03-18T05:19:16.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '1',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '4',
            type: 'user',
          },
        },
      },
    },
    {
      id: '58',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-03-18T05:19:16.000Z',
        updatedAt: '2019-03-18T05:19:16.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '1',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '4',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Darci',
        lastName: 'Kuhic',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 2,
  },
};
