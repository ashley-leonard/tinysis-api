// GET /api/meetings?contractIds=8
export default {
  data: [
    {
      id: '1',
      type: 'meeting',
      attributes: {
        title: 'Attendance for Monday, 02 September 2019',
        meetingDate: '2019-09-02',
      },
      relationships: {
        meetingParticipants: {
          data: [
            {
              id: '1',
              type: 'meetingParticipant',
            },
            {
              id: '2',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'meeting',
      attributes: {
        title: 'Attendance for Tuesday, 03 September 2019',
        meetingDate: '2019-09-03',
      },
      relationships: {
        meetingParticipants: {
          data: [
            {
              id: '3',
              type: 'meetingParticipant',
            },
            {
              id: '4',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'meeting',
      attributes: {
        title: 'Attendance for Wednesday, 04 September 2019',
        meetingDate: '2019-09-04',
      },
      relationships: {
        meetingParticipants: {
          data: [
            {
              id: '5',
              type: 'meetingParticipant',
            },
            {
              id: '6',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '4',
      type: 'meeting',
      attributes: {
        title: 'Attendance for Thursday, 05 September 2019',
        meetingDate: '2019-09-05',
      },
      relationships: {
        meetingParticipants: {
          data: [
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '8',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '5',
      type: 'meeting',
      attributes: {
        title: 'Attendance for Friday, 06 September 2019',
        meetingDate: '2019-09-06',
      },
      relationships: {
        meetingParticipants: {
          data: [
            {
              id: '9',
              type: 'meetingParticipant',
            },
            {
              id: '10',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 5,
  },
};
