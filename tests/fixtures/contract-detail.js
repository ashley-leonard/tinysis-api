// GET /api/contracts/9?include=category,facilitator,assignments,meetings,creditAssignments,creditAssignments.credit,term,ealrs
export default {
  data: {
    id: '9',
    type: 'contract',
    attributes: {
      name: 'Averto spiculum spoliatio aestus alter.',
      status: 'approved',
      learningObjectives: 'Adfectus calculus claro somniculosus tubineus.',
      competencies: 'Tabesco porro veritas solutio cubo.',
      evaluationMethods: 'Thymum est alienus comis molestiae.',
      instructionalMaterials: 'Compono autem architecto adiuvo avaritia.',
      location: 'Delectus capillus adstringo verumtamen alter.',
      timeslots: [
        {
          start: '8:45',
          end: '10:30',
          weekdays: '01234',
        },
      ],
    },
    relationships: {
      enrollments: {
        data: [
          {
            id: '11',
            type: 'enrollment',
          },
          {
            id: '12',
            type: 'enrollment',
          },
        ],
      },
      facilitator: {
        data: {
          id: '152',
          type: 'User',
        },
      },
      term: {
        data: {
          id: '58',
          type: 'term',
        },
      },
      category: {
        data: {
          id: '6',
          type: 'category',
        },
      },
      assignments: {
        data: [
          {
            id: '1',
            type: 'assignment',
          },
          {
            id: '2',
            type: 'assignment',
          },
          {
            id: '3',
            type: 'assignment',
          },
          {
            id: '4',
            type: 'assignment',
          },
          {
            id: '5',
            type: 'assignment',
          },
        ],
      },
      creditAssignments: {
        data: [
          {
            id: '2',
            type: 'creditAssignment',
          },
        ],
      },
      meetings: {
        data: [
          {
            id: '1',
            type: 'meeting',
          },
          {
            id: '2',
            type: 'meeting',
          },
          {
            id: '3',
            type: 'meeting',
          },
          {
            id: '4',
            type: 'meeting',
          },
          {
            id: '5',
            type: 'meeting',
          },
        ],
      },
      ealrs: {
        data: [
          {
            id: '1',
            type: 'ealr',
          },
          {
            id: '2',
            type: 'ealr',
          },
          {
            id: '3',
            type: 'ealr',
          },
          {
            id: '4',
            type: 'ealr',
          },
        ],
      },
    },
  },
  included: [
    {
      id: '1',
      type: 'assignment',
      attributes: {
        name: 'Assignment 1',
        description: 'Here is assignment number 1',
        dueDate: '2019-09-02',
      },
      relationships: {
        turnins: {
          data: [
            {
              id: '1',
              type: 'turnin',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'assignment',
      attributes: {
        name: 'Assignment 2',
        description: 'Here is assignment number 2',
        dueDate: '2019-09-03',
      },
      relationships: {
        turnins: {
          data: [
            {
              id: '2',
              type: 'turnin',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'assignment',
      attributes: {
        name: 'Assignment 3',
        description: 'Here is assignment number 3',
        dueDate: '2019-09-04',
      },
      relationships: {
        turnins: {
          data: [
            {
              id: '3',
              type: 'turnin',
            },
          ],
        },
      },
    },
    {
      id: '4',
      type: 'assignment',
      attributes: {
        name: 'Assignment 4',
        description: 'Here is assignment number 4',
        dueDate: '2019-09-05',
      },
      relationships: {
        turnins: {
          data: [
            {
              id: '4',
              type: 'turnin',
            },
          ],
        },
      },
    },
    {
      id: '5',
      type: 'assignment',
      attributes: {
        name: 'Assignment 5',
        description: 'Here is assignment number 5',
        dueDate: '2019-09-06',
      },
      relationships: {
        turnins: {
          data: [
            {
              id: '5',
              type: 'turnin',
            },
          ],
        },
      },
    },
    {
      id: '6',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '6',
              type: 'contract',
            },
            {
              id: '9',
              type: 'contract',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '6',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '6',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
      },
    },
    {
      id: '1',
      type: 'ealr',
      attributes: {
        ealr: 'Caecus auris solio thymum quibusdam.',
        seq: '1.1',
        category: 'Category 1',
      },
    },
    {
      id: '2',
      type: 'ealr',
      attributes: {
        ealr: 'Virtus facilis apud quas pax.',
        seq: '1.2',
        category: 'Category 1',
      },
    },
    {
      id: '3',
      type: 'ealr',
      attributes: {
        ealr: 'Taedium acceptus similique aliquid numquam.',
        seq: '2.1',
        category: 'Category 2',
      },
    },
    {
      id: '4',
      type: 'ealr',
      attributes: {
        ealr: 'Curriculum accipio thorax damno depromo.',
        seq: '2.2',
        category: 'Category 2',
      },
    },
    {
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
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
    {
      id: '58',
      type: 'term',
      attributes: {
        name: 'Current One',
        schoolYear: 2019,
        creditDate: '2020-01-31',
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
        ],
        status: 'active',
      },
      meta: null,
    },
  ],
};
