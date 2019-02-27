export default {
  data: [
    {
      id: '230',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:06.000Z',
        updatedAt: '2019-02-25T04:39:06.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
            id: '4',
            type: 'user',
          },
        },
      },
    },
    {
      id: '320',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:07.000Z',
        updatedAt: '2019-02-25T04:39:07.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
            id: '4',
            type: 'user',
          },
        },
      },
    },
    {
      id: '231',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:06.000Z',
        updatedAt: '2019-02-25T04:39:06.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
            id: '5',
            type: 'user',
          },
        },
      },
    },
    {
      id: '321',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:07.000Z',
        updatedAt: '2019-02-25T04:39:07.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
            id: '5',
            type: 'user',
          },
        },
      },
    },
    {
      id: '232',
      type: 'status',
      attributes: {
        month: '2019-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:06.000Z',
        updatedAt: '2019-02-25T04:39:06.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
      id: '322',
      type: 'status',
      attributes: {
        month: '2019-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2019-02-25T04:39:07.000Z',
        updatedAt: '2019-02-25T04:39:07.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: true,
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
  ],
  included: [
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Jaime',
        lastName: 'Frami',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Reagan',
        lastName: 'Cartwright',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
  ],
  meta: {
    count: 6,
  },
};
