// GET /api/statuses?studentIds=192,193&months=2019-09-01,2019-10-01,2019-11-01,2019-12-01,2020-01-01,2020-02-01,2020-03-01,2020-04-01,2020-05-01,2020-06-01&type=student
export default {
  data: [
    {
      id: '104',
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
            id: '188',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '192',
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
            id: '188',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '192',
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
            id: '188',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '193',
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
            id: '188',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '193',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '188',
      type: 'user',
      attributes: {
        firstName: 'Bo',
        lastName: 'Hartmann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'marcelle@satterfield.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '192',
              type: 'user',
            },
            {
              id: '193',
              type: 'user',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 4,
  },
};
