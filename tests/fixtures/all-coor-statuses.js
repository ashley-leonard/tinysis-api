// GET /api/statuses?limit=-1&months=2019-09-01%2C2019-10-01%2C2019-11-01%2C2019-12-01%2C2020-01-01%2C2020-02-01%2C2020-03-01%2C2020-04-01%2C2020-05-01%2C2020-06-01&studentIds=5%2C6%2C7&type=student
export default {
  data: [
    {
      id: '43',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '5',
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
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '5',
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
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '6',
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
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '6',
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
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '7',
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
        createdAt: '2019-05-05T14:05:47.000Z',
        updatedAt: '2019-05-05T14:05:47.000Z',
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
            id: '7',
            type: 'user',
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
        firstName: 'Perry',
        lastName: 'Rolfson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: '99riqb6cik3e',
        email: 'nidia@stroman.net',
        canLogin: false,
        isActive: true,
        role: 'staff',
        isAdmin: false,
        status: 'active',
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
        firstName: 'Fermin',
        lastName: 'Ziemann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        login: 'cph16wxjdeiv',
        email: 'corrina@beier.com',
        canLogin: false,
        isActive: true,
        role: 'staff',
        isAdmin: false,
        status: 'active',
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
