// GET /api/statuses?studentIds=161,162&months=2019-09-01,2019-10-01,2019-11-01,2019-12-01,2020-01-01,2020-02-01,2020-03-01,2020-04-01,2020-05-01,2020-06-01&type=student
export default {
  data: [
    {
      id: '104',
      type: 'status',
      attributes: {
        month: '2019-09-01',
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
            id: '161',
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
            id: '161',
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
            id: '162',
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
            id: '162',
            type: 'user',
          },
        },
      },
    },
  ],
  included: [
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
    count: 4,
  },
};
