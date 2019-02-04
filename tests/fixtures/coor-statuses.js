export default {
  data: [
    {
      id: '230',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '4',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '1',
            type: 'creator',
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
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '4',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '1',
            type: 'creator',
          },
        },
      },
    },
    {
      id: '231',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '5',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '2',
            type: 'creator',
          },
        },
      },
    },
    {
      id: '321',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '5',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '2',
            type: 'creator',
          },
        },
      },
    },
    {
      id: '232',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '6',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '2',
            type: 'creator',
          },
        },
      },
    },
    {
      id: '322',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-04T04:40:28.000Z',
        updatedAt: '2019-02-04T04:40:28.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        studentId: '6',
        enrollmentId: null,
      },
      relationships: {
        creator: {
          data: {
            id: '2',
            type: 'creator',
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
        firstName: 'Ed',
        lastName: 'Okuneva',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Rayford',
        lastName: 'Koss',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 6,
  },
};
