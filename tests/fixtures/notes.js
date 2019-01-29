export const notesResult = {
  data: [
    {
      id: '241545',
      type: 'note',
      attributes: {
        note: 'good communication with me',
        updatedAt: '2018-09-19T21:54:18.000Z',
        notableId: '295442',
      },
      relationships: {
        creator: {
          data: {
            id: '336',
            type: 'User',
          },
        },
      },
    },
    {
      id: '245037',
      type: 'note',
      attributes: {
        note: 'good communication with me, even as they mostly work independently on remaining senior requirements',
        updatedAt: '2018-10-18T23:01:42.000Z',
        notableId: '298008',
      },
      relationships: {
        creator: {
          data: {
            id: '336',
            type: 'User',
          },
        },
      },
    },
    {
      id: '245239',
      type: 'note',
      attributes: {
        note: 'making good progress and communicating well with me',
        updatedAt: '2018-10-18T23:48:14.000Z',
        notableId: '298191',
      },
      relationships: {
        creator: {
          data: {
            id: '336',
            type: 'User',
          },
        },
      },
    },
    {
      id: '246292',
      type: 'note',
      attributes: {
        note: 'He just joined our committee.',
        updatedAt: '2018-10-22T22:05:31.000Z',
        notableId: '299103',
      },
      relationships: {
        creator: {
          data: {
            id: '1362',
            type: 'User',
          },
        },
      },
    },
  ],
  included: [
    {
      id: '336',
      type: 'creator',
      attributes: {
        firstName: 'Boo',
        lastName: 'Hiss',
        nickname: '',
        dateActive: '2007-08-30',
        dateInactive: null,
        status: 'active',
      },
    },
    {
      id: '1362',
      type: 'creator',
      attributes: {
        firstName: 'Boo',
        lastName: 'Hoo',
        nickname: '',
        dateActive: '2014-09-01',
        dateInactive: null,
        status: 'active',
      },
    },
  ],
  meta: {
    count: 4,
  },
};

export const statusResult = {
  data: [
    {
      id: '295442',
      type: 'status',
      attributes: {
        month: '2018-09-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2018-09-19T14:54:13.000Z',
        updatedAt: '2018-09-19T14:54:13.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: false,
        studentId: null,
        enrollmentId: '70636',
        coordinatorId: null,
      },
      relationships: {
        notes: {
          data: [
            {
              id: '241545',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '298008',
      type: 'status',
      attributes: {
        month: '2018-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2018-10-18T16:01:20.000Z',
        updatedAt: '2018-10-18T16:01:20.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: false,
        studentId: null,
        enrollmentId: '70636',
        coordinatorId: null,
      },
      relationships: {
        notes: {
          data: [
            {
              id: '245037',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '298191',
      type: 'status',
      attributes: {
        month: '2018-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2018-10-18T16:48:02.000Z',
        updatedAt: '2018-10-18T16:48:02.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: false,
        studentId: null,
        enrollmentId: '70770',
        coordinatorId: null,
      },
      relationships: {
        notes: {
          data: [
            {
              id: '245239',
              type: 'note',
            },
          ],
        },
      },
    },
    {
      id: '299103',
      type: 'status',
      attributes: {
        month: '2018-10-01',
        academicStatus: 0,
        attendanceStatus: 0,
        createdAt: '2018-10-22T15:04:35.000Z',
        updatedAt: '2018-10-22T15:04:35.000Z',
        fteHours: 25,
        metFteRequirements: true,
        heldPeriodicCheckins: false,
        studentId: null,
        enrollmentId: '71060',
        coordinatorId: null,
      },
      relationships: {
        notes: {
          data: [
            {
              id: '246292',
              type: 'note',
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
