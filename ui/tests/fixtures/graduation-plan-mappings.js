// GET /api/graduation-plan-mappings/12
export default {
  data: [
    {
      id: '1',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '1',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '27',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '2',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '4',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '26',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '3',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '5',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '25',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '4',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is done',
      },
      relationships: {
        student: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '7',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '5',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is serviced',
      },
      relationships: {
        student: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '9',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
  ],
  included: [
    {
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '1',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '6',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '7',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '12',
            type: 'user',
          },
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
      id: '2',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '1',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Dolores est quia. Quo sint incidunt. Praesentium et autem.\\n\\nReiciendis a omnis. Quis eos quis. Aut est blanditiis.\\n\\nVel asperiores minus. Harum dolorem sit. Ut blanditiis dolorum.',
        position: 1,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
    {
      id: '26',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '2',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '6',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '7',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '12',
            type: 'user',
          },
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
      id: '4',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Alias rem aut. Est cum nam. Dolores non in.\\n\\nAmet ut est. Eos est omnis. At possimus nostrum.\\n\\nMagnam porro modi. Quisquam quia enim. Molestiae et excepturi.',
        position: 1,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: {
            id: '2',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '25',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '3',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '6',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '8',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '7',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '12',
            type: 'user',
          },
        },
        creditTransmittalBatch: {
          data: {
            id: '1',
            type: 'creditTransmittalBatch',
          },
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
      id: '1',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 1',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '5',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Eum tempora voluptatem. Alias in rerum. Eum cum sequi.\\n\\nEos qui amet. Consectetur assumenda hic. Officiis commodi error.\\n\\nEt vero officiis. Deleniti cupiditate aliquid. Est illo magnam.',
        position: 2,
        requirementType: 'credit',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: {
            id: '2',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '7',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Sed voluptas possimus. Vel consequatur rerum. Ea adipisci repellendus.\\n\\nQuia totam earum. Aut dolor voluptatibus. Voluptatem ut voluptatum.\\n\\nUt sit vero. Porro aspernatur iure. Ea omnis sequi.',
        position: 1,
        requirementType: 'general',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
    {
      id: '9',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Necessitatibus et alias. Numquam qui est. Animi et voluptas.\\n\\nDeleniti voluptate id. Fugit dolores culpa. Corrupti vero delectus.\\n\\nMaxime molestiae sequi. Est assumenda neque. Dolor id corrupti.',
        position: 1,
        requirementType: 'service',
        status: 'active',
      },
      relationships: {
        children: {
          data: [

          ],
        },
        parent: {
          data: null,
        },
      },
    },
  ],
  meta: {
    count: 5,
  },
};
