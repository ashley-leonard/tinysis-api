export default {
  data: [
    {
      id: '16',
      type: 'status',
      attributes: {
        month: '2018-09-01',
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
            id: '3',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '17',
      type: 'status',
      attributes: {
        month: '2018-10-01',
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
            id: '3',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '18',
      type: 'status',
      attributes: {
        month: '2018-11-01',
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
            id: '3',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '19',
      type: 'status',
      attributes: {
        month: '2018-09-01',
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
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '20',
      type: 'status',
      attributes: {
        month: '2018-10-01',
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
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '21',
      type: 'status',
      attributes: {
        month: '2018-11-01',
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
            type: 'enrollment',
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
    count: 6,
  },
};
