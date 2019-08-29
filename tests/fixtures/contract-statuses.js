// GET /api/statuses?enrollmentIds=12,11
export default {
  data: [
    {
      id: '61',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '62',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '63',
      type: 'status',
      attributes: {
        month: '2019-11-01',
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
            id: '11',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '64',
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
            id: '12',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '65',
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
            id: '12',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '66',
      type: 'status',
      attributes: {
        month: '2019-11-01',
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
            id: '12',
            type: 'enrollment',
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
  ],
  meta: {
    count: 6,
  },
};
