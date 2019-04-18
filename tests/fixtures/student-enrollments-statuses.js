// GET /api/statuses?enrollmentIds=1,3
export default {
  data: [
    {
      id: '1',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
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
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
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
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
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
            id: '1',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '7',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '2',
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
      id: '8',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '2',
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
      id: '9',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-04-12T23:43:34.000Z',
        updatedAt: '2019-04-12T23:43:34.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '2',
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
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Gabriella',
        lastName: 'Hegmann',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Evita',
        lastName: 'Haley',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
      relationships: {
      },
    },
  ],
  meta: {
    count: 6,
  },
};
