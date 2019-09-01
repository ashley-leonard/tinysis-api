// GET /api/statuses?enrollmentIds=5,7
export default {
  data: [
    {
      id: '1',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '104',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '5',
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
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '104',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '5',
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
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '104',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '5',
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
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '105',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '7',
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
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '105',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '7',
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
        createdAt: '2019-09-01T15:24:18.000Z',
        updatedAt: '2019-09-01T15:24:18.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '105',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '7',
            type: 'enrollment',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'august@gradykaulke.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'linwoodoconner@breitenberg.io',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '109',
              type: 'student',
            },
            {
              id: '110',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 6,
  },
};
