// GET /api/enrollments?participantIds=191&status=enrolled&include=contract,contract.facilitator,contract.term,credit_assignments,credit_assignments.credit,participant
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
            id: '191',
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
      id: '17',
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
            id: '191',
            type: 'participant',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '30',
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
        name: 'Non cena atque vindico vestrum.',
        status: 'approved',
        learningObjectives: 'Chirographum tego canto cattus tamen.',
        competencies: 'Similique terror depereo tergeo clarus.',
        evaluationMethods: 'Sto depono sit auris demergo.',
        instructionalMaterials: 'Solum vita videlicet denuncio surgo.',
        location: 'Dolores verumtamen vesco volutabrum chirographum.',
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
          ],
        },
        facilitator: {
          data: {
            id: '187',
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
      id: '187',
      type: 'user',
      attributes: {
        firstName: 'Judson',
        lastName: 'Emmerich',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'hosea@kovacek.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '191',
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
        name: 'Face to face web-enabled ability',
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
      id: '191',
      type: 'user',
      attributes: {
        firstName: 'Wally',
        lastName: 'Baumbach',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        districtId: '8257538751',
        districtGrade: 12,
        email: null,
        status: 'active',
        role: 'student',
      },
      relationships: {
        coordinator: {
          data: {
            id: '187',
            type: 'user',
          },
        },
      },
    },
    {
      id: '15',
      type: 'contract',
      attributes: {
        name: 'Caritas tubineus tempus voco vestigium.',
        status: 'approved',
        learningObjectives: 'Trans appositus assentator concido apud.',
        competencies: 'Appositus valetudo video volaticus thema.',
        evaluationMethods: 'Suscipio aveho cena tepidus acceptus.',
        instructionalMaterials: 'Villa sufficio alienus inflammatio tametsi.',
        location: 'Voluptatem conor bos amplitudo aestus.',
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
              id: '17',
              type: 'enrollment',
            },
            {
              id: '18',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '188',
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
      id: '188',
      type: 'user',
      attributes: {
        firstName: 'Bo',
        lastName: 'Hartmann',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'marcelle@satterfield.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '192',
              type: 'user',
            },
            {
              id: '193',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '30',
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
