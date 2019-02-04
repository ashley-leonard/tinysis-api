export default {
  data: [
    {
      id: '1',
      type: 'enrollment',
      attributes: {
        participantId: 4,
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '1',
            type: 'contract',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '5',
              type: 'creditAssignment',
            },
          ],
        },
      },
    },
    {
      id: '3',
      type: 'enrollment',
      attributes: {
        participantId: 4,
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '3',
            type: 'contract',
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
      },
    },
    {
      id: '5',
      type: 'enrollment',
      attributes: {
        participantId: 5,
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '2',
            type: 'contract',
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
      },
    },
    {
      id: '6',
      type: 'enrollment',
      attributes: {
        participantId: 5,
        finalizedOn: null,
        enrollmentStatus: 'enrolled',
        completionStatus: 'incomplete',
      },
      relationships: {
        contract: {
          data: {
            id: '4',
            type: 'contract',
          },
        },
        creditAssignments: {
          data: [
            {
              id: '10',
              type: 'creditAssignment',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Tamen absorbeo demitto vinco qui.',
        status: 'closed',
        learningObjectives: 'In ducimus audio admitto vulgivagus.',
        competencies: 'Speciosus caste thorax modi qui.',
        evaluationMethods: 'Caelestis bonus recusandae ullus synagoga.',
        instructionalMaterials: 'Tenax attero atqui sublime sursum.',
        location: 'Qui vel necessitatibus umbra conculco.',
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
              id: '1',
              type: 'enrollment',
            },
            {
              id: '2',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '1',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '1',
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
              id: '1',
              type: 'creditAssignment',
            },
          ],
        },
      },
    },
    {
      id: '1',
      type: 'user',
      attributes: {
        firstName: 'Ed',
        lastName: 'Okuneva',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
    {
      id: '1',
      type: 'term',
      attributes: {
        name: 'Last One',
        schoolYear: 2018,
        creditDate: null,
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
        ],
        status: 'active',
      },
    },
    {
      id: '5',
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
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Animus omnis spargo decet varietas.',
        status: 'approved',
        learningObjectives: 'Vox tam iure beneficium odio.',
        competencies: 'Conatus magnam nihil tersus comis.',
        evaluationMethods: 'Nihil accusantium et consequuntur angulus.',
        instructionalMaterials: 'Altus alter inventore viriliter adsidue.',
        location: 'Pauci dolores tamdiu vigilo enim.',
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
              id: '3',
              type: 'enrollment',
            },
            {
              id: '4',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '1',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '3',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '1',
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
      },
    },
    {
      id: '3',
      type: 'term',
      attributes: {
        name: 'Current One',
        schoolYear: 2018,
        creditDate: null,
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
        ],
        status: 'active',
      },
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
      },
    },
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Cura deleniti ventosus curso tertius.',
        status: 'closed',
        learningObjectives: 'Catena ut audentia verbera unde.',
        competencies: 'Velociter tredecim teneo verbera aliquid.',
        evaluationMethods: 'Et vorax thorax rerum vinculum.',
        instructionalMaterials: 'Aeneus cuppedia cras vulnero absum.',
        location: 'Odit super acervus communis cum.',
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
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '2',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
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
              id: '3',
              type: 'creditAssignment',
            },
          ],
        },
      },
    },
    {
      id: '2',
      type: 'user',
      attributes: {
        firstName: 'Rayford',
        lastName: 'Koss',
        nickname: null,
        dateActive: null,
        dateInactive: null,
        status: 'active',
        role: 'staff',
      },
    },
    {
      id: '2',
      type: 'term',
      attributes: {
        name: 'Last Two',
        schoolYear: 2018,
        creditDate: null,
        months: [
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'active',
      },
    },
    {
      id: '9',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
      },
    },
    {
      id: '2',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        courseType: 0,
      },
    },
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Dedico torrens calcar odio et.',
        status: 'approved',
        learningObjectives: 'Solium contabesco despecto adfero accusantium.',
        competencies: 'Vigor ut crudelis vergo usque.',
        evaluationMethods: 'Arbor velut suppono theologus capitulus.',
        instructionalMaterials: 'Quis adimpleo et thesaurus tres.',
        location: 'Paulatim deludo crur valde delectatio.',
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
              id: '6',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '2',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '4',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '2',
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
      },
    },
    {
      id: '4',
      type: 'term',
      attributes: {
        name: 'Current Two',
        schoolYear: 2018,
        creditDate: null,
        months: [
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'active',
      },
    },
    {
      id: '10',
      type: 'creditAssignment',
      attributes: {
        creditHours: 2.0,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
      },
    },
  ],
  meta: {
    count: 4,
  },
};
