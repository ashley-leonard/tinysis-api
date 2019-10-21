// GET /api/enrollments?participantIds=245&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
export default {
  data: [
    {
      id: '15',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '14',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '245',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '28',
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
              id: '4',
              type: 'meetingParticipant',
            },
            {
              id: '7',
              type: 'meetingParticipant',
            },
            {
              id: '10',
              type: 'meetingParticipant',
            },
            {
              id: '13',
              type: 'meetingParticipant',
            },
          ],
        },
      },
    },
    {
      id: '18',
      type: 'enrollment',
      attributes: {
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '15',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '245',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '31',
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
      id: '14',
      type: 'contract',
      attributes: {
        name: 'Fugit repellat trans voluptatibus decens.',
        status: 'approved',
        learningObjectives: 'Ut vivo abundans laudantium corpus.',
        competencies: 'Damnatio illo placeat rerum comminor.',
        evaluationMethods: 'Velociter avoco autem amissio ager.',
        instructionalMaterials: 'Tergiversatio dolore vigor voluptate amo.',
        location: 'Quod et rem eligendi defaeco.',
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
              id: '15',
              type: 'enrollment',
            },
            {
              id: '16',
              type: 'enrollment',
            },
            {
              id: '17',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '241',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '8',
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
              id: '23',
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
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '62',
      type: 'term',
      attributes: {
        name: 'Extended local flexibility',
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
      id: '28',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '45',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: null,
        },
        contractFacilitator: {
          data: null,
        },
        contract: {
          data: null,
        },
        user: {
          data: null,
        },
        creditTransmittalBatch: {
          data: null,
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '45',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '245',
      type: 'user',
      attributes: {
        firstName: 'Lincoln',
        lastName: 'Dietrich',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8450113509',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '241',
            type: 'user',
          },
        },
      },
    },
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Vulgo coruscus crastinus omnis admitto.',
        status: 'approved',
        learningObjectives: 'Deduco sto depopulo cupio amor.',
        competencies: 'Cariosus tener cohaero acies tubineus.',
        evaluationMethods: 'Teres animi vir cunae casus.',
        instructionalMaterials: 'Cubitum blanditiis corroboro patria quibusdam.',
        location: 'Acervus ventus audax denuo chirographum.',
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
              id: '18',
              type: 'enrollment',
            },
            {
              id: '19',
              type: 'enrollment',
            },
            {
              id: '20',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '62',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '9',
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
              id: '25',
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
      id: '242',
      type: 'user',
      attributes: {
        firstName: 'Hector',
        lastName: 'Ritchie',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ethelkris@dicki.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '246',
              type: 'user',
            },
            {
              id: '247',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '31',
      type: 'creditAssignment',
      attributes: {
        creditHours: 1.0,
      },
      relationships: {
        credit: {
          data: {
            id: '45',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: null,
        },
        contractFacilitator: {
          data: null,
        },
        contract: {
          data: null,
        },
        user: {
          data: null,
        },
        creditTransmittalBatch: {
          data: null,
        },
        childCreditAssignments: {
          data: [

          ],
        },
        parentCreditAssignment: {
          data: null,
        },
      },
    },
  ],
  meta: {
    count: 2,
  },
};
