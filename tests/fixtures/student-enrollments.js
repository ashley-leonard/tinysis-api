// GET /api/enrollments?participantIds=108&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  data: [
    {
      id: '5',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '9',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '108',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '7',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [
            {
              id: '1',
              type: 'turnin',
            },
            {
              id: '2',
              type: 'turnin',
            },
            {
              id: '3',
              type: 'turnin',
            },
            {
              id: '4',
              type: 'turnin',
            },
            {
              id: '5',
              type: 'turnin',
            },
          ],
        },
        meetingParticipants: {
          data: [
            {
              id: '1',
              type: 'meetingParticipant',
            },
            {
              id: '3',
              type: 'meetingParticipant',
            },
            {
              id: '5',
              type: 'meetingParticipant',
            },
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '9',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '7',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '10',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '108',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '9',
              type: 'creditAssignment',
            },
          ],
        },
        turnins: {
          data: [

          ],
        },
        meetingParticipants: {
          data: [

          ],
        },
      },
    },
  ],
  included: [
    {
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Cupiditas alias cibo vobis textilis.',
        status: 'approved',
        learningObjectives: 'Adfectus desparatus trado civitas verbum.',
        competencies: 'Speciosus confido labore deripio coniuratio.',
        evaluationMethods: 'Thorax comprehendo sodalitas temporibus suus.',
        instructionalMaterials: 'Ter ascit repellendus arma eos.',
        location: 'Atrox acervus comedo vomito timor.',
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
              id: '5',
              type: 'enrollment',
            },
            {
              id: '6',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '104',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '50',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '3',
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
    {
      id: '104',
      type: 'user',
      attributes: {
        firstName: 'Celia',
        lastName: 'Mosciski',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'august@gradykaulke.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '108',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '50',
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
    {
      id: '7',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '1',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
      },
    },
    {
      id: '108',
      type: 'user',
      attributes: {
        firstName: 'Suzie',
        lastName: 'Schinner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7906630283',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '104',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Et bestia solio labore adficio.',
        status: 'approved',
        learningObjectives: 'Cerno incidunt expedita apto caute.',
        competencies: 'Conitor bestia verto aranea asporto.',
        evaluationMethods: 'Speciosus trado est repellat accommodo.',
        instructionalMaterials: 'Defendo tunc charisma sed patruus.',
        location: 'Desino adhaero coaegresco omnis pecto.',
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
              id: '7',
              type: 'enrollment',
            },
            {
              id: '8',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '105',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '50',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        assignments: {
          data: [

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '4',
              type: 'creditAssignment',
            },
          ],
        },
        meetings: {
          data: [

          ],
        },
        ealrs: {
          data: [

          ],
        },
      },
    },
    {
      id: '105',
      type: 'user',
      attributes: {
        firstName: 'Shane',
        lastName: 'Denesik',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'linwoodoconner@breitenberg.io',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '109',
              type: 'student',
            },
            {
              id: '110',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '9',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
