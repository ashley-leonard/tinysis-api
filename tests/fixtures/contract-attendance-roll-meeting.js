// GET /api/meetings/1?include=meetingParticipants/api/meetings?contractIds=
export default {
  data: {
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
};
