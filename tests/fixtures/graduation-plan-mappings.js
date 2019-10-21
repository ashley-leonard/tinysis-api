// GET /api/graduation-plan-mappings/246
export default {
  data: [
    {
      id: '17',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '246',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '26',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '48',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '18',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '246',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '29',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '47',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '19',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: null,
        notes: null,
      },
      relationships: {
        student: {
          data: {
            id: '246',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '30',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '46',
            type: 'creditAssignment',
          },
        },
      },
    },
    {
      id: '20',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is done',
      },
      relationships: {
        student: {
          data: {
            id: '246',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '32',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: null,
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanMapping',
      attributes: {
        dateCompleted: '2019-06-15',
        notes: 'It is serviced',
      },
      relationships: {
        student: {
          data: {
            id: '246',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '34',
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
      id: '48',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '46',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '17',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '242',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '246',
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
      id: '46',
      type: 'credit',
      attributes: {
        courseId: '0',
        courseName: 'Course 2',
        status: 'active',
        courseType: 'none',
      },
    },
    {
      id: '26',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Nihil quia consequatur. Commodi maxime itaque. Vitae quos vel.\\n\\nEst nihil nulla. Ad iusto perferendis. Nisi impedit eligendi.\\n\\nOfficia nesciunt earum. Quo repellendus tempora. Nesciunt incidunt distinctio.',
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
      id: '47',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
      },
      relationships: {
        credit: {
          data: {
            id: '46',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '18',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '242',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '246',
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
      id: '29',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Non enim aut. Est et qui. Commodi blanditiis modi.\\n\\nDolorem neque eos. Enim ut qui. Expedita sapiente quisquam.\\n\\nLibero qui ut. Fuga odio explicabo. Harum officia consequatur.',
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
            id: '27',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '46',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
      },
      relationships: {
        credit: {
          data: {
            id: '45',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: {
            id: '19',
            type: 'graduationPlanMapping',
          },
        },
        contractTerm: {
          data: {
            id: '61',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '242',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '12',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '246',
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
      id: '30',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Ab molestias nihil. Repellat ut omnis. Dolores in ut.\\n\\nVero et numquam. Adipisci modi est. Officiis repellat nisi.\\n\\nEst et eaque. Reiciendis tempora cum. Eum explicabo enim.',
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
            id: '27',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '32',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Consectetur et qui. Dolorum adipisci veniam. Ut architecto deleniti.\\n\\nUllam in temporibus. Et dolorem officiis. Consequuntur deserunt ullam.\\n\\nPossimus quia mollitia. Ratione cupiditate labore. Cumque deserunt est.',
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
      id: '34',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Eos impedit ea. In aut odit. Harum assumenda corrupti.\\n\\nFacilis esse sed. Eligendi quis beatae. In illum corporis.\\n\\nDistinctio dolore qui. Delectus veritatis fuga. Autem omnis harum.',
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
