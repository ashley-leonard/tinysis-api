// GET /api/statuses?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=108%2C109%2C110&type=student
export default {
  data: [
    {
      id: '43',
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
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '46',
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
            id: '108',
            type: 'user',
          },
        },
      },
    },
    {
      id: '44',
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
            id: '109',
            type: 'user',
          },
        },
      },
    },
    {
      id: '47',
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
            id: '109',
            type: 'user',
          },
        },
      },
    },
    {
      id: '45',
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
            id: '110',
            type: 'user',
          },
        },
      },
    },
    {
      id: '48',
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
            id: '110',
            type: 'user',
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
