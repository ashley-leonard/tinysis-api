// GET /api/statuses?enrollmentIds=2,1
export default {
  data: [
    {
      id: '1',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
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
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
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
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
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
      id: '4',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '5',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '6',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-11-15T00:00:00.000Z',
        updatedAt: '2019-11-15T00:00:00.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '22',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '2',
            type: 'enrollment',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '22',
      type: 'user',
      attributes: {
        firstName: 'Hoyt',
        lastName: 'Sauer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'serita@bartoletti.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '26',
              type: 'user',
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
