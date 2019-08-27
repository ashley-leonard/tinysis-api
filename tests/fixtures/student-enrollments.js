// GET /api/enrollments?participantIds=184&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  data: [
    {
      id: '11',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '8',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '184',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '23',
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
      id: '13',
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
            id: '184',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '25',
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
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Vado veritas tenetur aspicio volup.',
        status: 'approved',
        learningObjectives: 'Quos velociter vulgaris strues impedit.',
        competencies: 'Clam bibo decerno circumvenio sufficio.',
        evaluationMethods: 'Accipio quasi officiis cultura asper.',
        instructionalMaterials: 'Culpa et adinventitias cur voluptas.',
        location: 'Somniculosus curvus viduo repellat ducimus.',
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
            id: '180',
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
              id: '20',
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
      id: '180',
      type: 'user',
      attributes: {
        firstName: 'Karena',
        lastName: 'Jacobs',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ariezemlak@macejkovicwhite.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '184',
              type: 'student',
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
    {
      id: '23',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '18',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
      },
    },
    {
      id: '18',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        courseType: 0,
      },
    },
    {
      id: '184',
      type: 'user',
      attributes: {
        firstName: 'Gerardo',
        lastName: 'Schimmel',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '5751521221',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '180',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Cui ambulo defungo totam dapifer.',
        status: 'approved',
        learningObjectives: 'Voveo cribro barba dolor truculenter.',
        competencies: 'Utor subvenio pecto usitas verbum.',
        evaluationMethods: 'Caries bestia defendo circumvenio et.',
        instructionalMaterials: 'Ustulo tabesco blanditiis earum quibusdam.',
        location: 'Qui tripudio demitto adversus vitae.',
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
              id: '13',
              type: 'enrollment',
            },
            {
              id: '14',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '181',
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
            id: '7',
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
              id: '22',
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
      id: '181',
      type: 'user',
      attributes: {
        firstName: 'Carita',
        lastName: 'Cremin',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'emilewindler@sanford.biz',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '185',
              type: 'student',
            },
            {
              id: '186',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '25',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '18',
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
