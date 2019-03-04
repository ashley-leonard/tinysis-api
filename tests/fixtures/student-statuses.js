export default {
  data: [
    {
      id: '230',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-03-04T03:01:37.000Z',
        updatedAt: '2019-03-04T03:01:37.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
      id: '320',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-03-04T03:01:37.000Z',
        updatedAt: '2019-03-04T03:01:37.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
        firstName: 'Sharonda',
        lastName: 'Gleichner',
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
