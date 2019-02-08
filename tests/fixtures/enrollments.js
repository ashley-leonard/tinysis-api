export default {
  data: [
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
      },
    },
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
      },
    },
  ],
  included: [
    {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Corroboro tamquam arcus vulgaris eum.',
        status: 'closed',
        learningObjectives: 'Commemoro adopto calculus comptus deripio.',
        competencies: 'Titulus stella copia censura audacia.',
        evaluationMethods: 'Trado id timor ancilla dens.',
        instructionalMaterials: 'Solus strenuus cupressus utrimque laboriosam.',
        location: 'Tricesimus velum uter comminor accendo.',
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
        firstName: 'Kami',
        lastName: 'Watsica',
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
        firstName: 'Lu',
        lastName: 'Funk',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: null,
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
        name: 'Autem iste vacuus vinco caveo.',
        status: 'approved',
        learningObjectives: 'Succurro soleo socius adinventitias corrupti.',
        competencies: 'Caute rerum summa contra vulgaris.',
        evaluationMethods: 'Stillicidium cum pecco studio tactus.',
        instructionalMaterials: 'Deporto absens viduata sint nemo.',
        location: 'In aut cuppedia ut urbs.',
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
        name: 'Contego suppono temeritas adflicto denuo.',
        status: 'closed',
        learningObjectives: 'Voluptatem valetudo audax curriculum fugiat.',
        competencies: 'Vulpes aestas crur est deinde.',
        evaluationMethods: 'Accendo turpis uterque vito vomica.',
        instructionalMaterials: 'Avoco creo et eveniet alter.',
        location: 'Deporto tempore quasi tantillus comes.',
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
        firstName: 'Lulu',
        lastName: 'Rau',
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
        firstName: 'Maximo',
        lastName: 'Powlowski',
        nickname: null,
        dateActive: '2018-08-01',
        dateInactive: null,
        status: 'active',
        role: 'student',
        districtId: null,
        districtGrade: null,
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
        name: 'Aut optio comedo quos defleo.',
        status: 'approved',
        learningObjectives: 'Trans synagoga ultio eligendi tum.',
        competencies: 'Condico amissio tollo veniam vacuus.',
        evaluationMethods: 'Talio acquiro adficio aggredior minima.',
        instructionalMaterials: 'Velit tepidus auris adipiscor perferendis.',
        location: 'Error cogito dolore coadunatio tripudio.',
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
