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
            id: '2',
            type: 'contract',
          },
        },
        participant: {
          data: {
            id: '5',
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
      },
    },
    {
      id: '6',
      type: 'enrollment',
      attributes: {
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
        participant: {
          data: {
            id: '5',
            type: 'participant',
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
        turnins: {
          data: [

          ],
        },
      },
    },
    {
      id: '1',
      type: 'enrollment',
      attributes: {
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
        participant: {
          data: {
            id: '4',
            type: 'participant',
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
        turnins: {
          data: [

          ],
        },
      },
    },
    {
      id: '3',
      type: 'enrollment',
      attributes: {
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
        participant: {
          data: {
            id: '4',
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
      },
    },
  ],
  included: [
    {
      id: '2',
      type: 'contract',
      attributes: {
        name: 'Adsum territo velum calcar assumenda.',
        status: 'closed',
        learningObjectives: 'Autem admiratio vulnero bonus ullam.',
        competencies: 'Non et ventus carcer pauper.',
        evaluationMethods: 'Abduco toties combibo denuncio thermae.',
        instructionalMaterials: 'Artificiose alias avarus suppono triginta.',
        location: 'Coerceo cuppedia ustilo vergo ulciscor.',
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
        firstName: 'Marty',
        lastName: 'Ledner',
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
      id: '5',
      type: 'user',
      attributes: {
        firstName: 'Alexandra',
        lastName: "O'Keefe",
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: 12,
        coordinatorId: '2',
      },
      relationships: {
        coordinator: {
          data: {
            id: '2',
            type: 'coordinator',
          },
        },
      },
    },
    {
      id: '4',
      type: 'contract',
      attributes: {
        name: 'Brevis saepe comptus spes cohibeo.',
        status: 'approved',
        learningObjectives: 'Claro delicate pecto qui caste.',
        competencies: 'Crebro tenus claro sum consectetur.',
        evaluationMethods: 'Delectus tergiversatio cimentarius amet speciosus.',
        instructionalMaterials: 'Eveniet voveo cunabula cognomen iste.',
        location: 'Bellicus auxilium demoror adimpleo atque.',
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
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Fugiat voluptatem synagoga consequuntur vaco.',
        status: 'closed',
        learningObjectives: 'Aut volo alii ea defaeco.',
        competencies: 'Eum assumenda cetera tardus utor.',
        evaluationMethods: 'Amissio degenero copiose sunt eligendi.',
        instructionalMaterials: 'Tot triduana unde cinis clementia.',
        location: 'Administratio id cum debeo tener.',
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
        firstName: 'Sharonda',
        lastName: 'Gleichner',
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
      id: '4',
      type: 'user',
      attributes: {
        firstName: 'Velva',
        lastName: 'Okuneva',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: 12,
        coordinatorId: '1',
      },
      relationships: {
        coordinator: {
          data: {
            id: '1',
            type: 'coordinator',
          },
        },
      },
    },
    {
      id: '3',
      type: 'contract',
      attributes: {
        name: 'Curia stella decet commodi velum.',
        status: 'approved',
        learningObjectives: 'Celo sophismata dolore tracto terror.',
        competencies: 'Et articulus armarium valens vereor.',
        evaluationMethods: 'Subvenio venio tubineus sopor anser.',
        instructionalMaterials: 'Baiulus cultura vinco optio adflicto.',
        location: 'Thymbra triginta deinde avarus comminor.',
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
  ],
  meta: {
    count: 4,
  },
};
