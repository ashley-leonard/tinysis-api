// GET /api/statuses?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=156%2C157%2C158&type=student
export default {
  data: [
    {
      id: '103',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '152',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '156',
            type: 'user',
          },
        },
      },
    },
    {
      id: '106',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '152',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '156',
            type: 'user',
          },
        },
      },
    },
    {
      id: '104',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '153',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '157',
            type: 'user',
          },
        },
      },
    },
    {
      id: '107',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '153',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '157',
            type: 'user',
          },
        },
      },
    },
    {
      id: '105',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '153',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '158',
            type: 'user',
          },
        },
      },
    },
    {
      id: '108',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-08-28T19:17:09.000Z',
        updatedAt: '2019-08-28T19:17:09.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '153',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '158',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'aron@heel.org',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
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
