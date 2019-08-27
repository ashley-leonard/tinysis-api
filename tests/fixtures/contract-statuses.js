// GET /api/statuses?enrollmentIds=12,11
export default {
  data: [
    {
      id: '61',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
        createdAt: '2019-08-27T04:01:08.000Z',
        updatedAt: '2019-08-27T04:01:08.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '180',
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
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
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
