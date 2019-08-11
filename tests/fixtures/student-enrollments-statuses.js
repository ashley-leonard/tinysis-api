// GET /api/statuses?enrollmentIds=1,3
export default {
  data: [
    {
      id: '1',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        createdAt: '2019-08-08T21:36:16.000Z',
        updatedAt: '2019-08-08T21:36:16.000Z',
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
        firstName: 'Angel',
        lastName: 'McLaughlin',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'stellawilderman@aufderhar.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '5',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Mikel',
        lastName: 'Davis',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'vicenta@moenrowe.io',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '6',
              type: 'student',
            },
            {
              id: '7',
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
