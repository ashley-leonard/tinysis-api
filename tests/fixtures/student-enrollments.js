// GET /api/enrollments?participantIds=156&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
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
            id: '9',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '156',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '6',
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
            id: '10',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '156',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '8',
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
      id: '6',
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
      id: '156',
      type: 'user',
      attributes: {
        firstName: 'Randell',
        lastName: 'Turner',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '7474755857',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '152',
            type: 'staff',
          },
        },
      },
    },
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Certe textor vir correptius aggredior.',
        status: 'approved',
        learningObjectives: 'Cotidie porro spero trado ipsa.',
        competencies: 'Cui error concido solum advenio.',
        evaluationMethods: 'Sufficio capio triumphus pel solus.',
        instructionalMaterials: 'Omnis ullus suscipio theologus comburo.',
        location: 'Explicabo suggero distinctio curriculum decens.',
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
            id: '153',
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
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'aron@heel.org',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '8',
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
  ],
  meta: {
    count: 2,
  },
};
