// GET /api/statuses?enrollmentIds=15,17
export default {
  data: [
    {
      id: '61',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-05-09T04:36:04.000Z',
        updatedAt: '2019-05-09T04:36:04.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '156',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '15',
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
        createdAt: '2019-05-09T04:36:04.000Z',
        updatedAt: '2019-05-09T04:36:04.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '156',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '15',
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
        createdAt: '2019-05-09T04:36:04.000Z',
        updatedAt: '2019-05-09T04:36:04.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '156',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '15',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '67',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-05-09T04:36:04.000Z',
        updatedAt: '2019-05-09T04:36:04.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '157',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '17',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '68',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        createdAt: '2019-05-09T04:36:05.000Z',
        updatedAt: '2019-05-09T04:36:05.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '157',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '17',
            type: 'enrollment',
          },
        },
      },
    },
    {
      id: '69',
      type: 'status',
      attributes: {
        month: '2019-11-01',
        createdAt: '2019-05-09T04:36:05.000Z',
        updatedAt: '2019-05-09T04:36:05.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
        academicStatus: 'satisfactory',
        attendanceStatus: 'satisfactory',
      },
      relationships: {
        creator: {
          data: {
            id: '157',
            type: 'creator',
          },
        },
        statusable: {
          data: {
            id: '17',
            type: 'enrollment',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Rory',
        lastName: 'Muller',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'qscm4ohqweb4',
        email: 'odell@hauck.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '160',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '157',
      type: 'user',
      attributes: {
        firstName: 'Richard',
        lastName: 'Kuhic',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'a701gzbzzkjc',
        email: 'lacy@runolfonlowe.io',
        canLogin: false,
        isActive: true,
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '161',
              type: 'student',
            },
            {
              id: '162',
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
