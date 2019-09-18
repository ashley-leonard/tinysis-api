// GET /api/graduation-plan-mappings/192
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
            id: '192',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '36',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '41',
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
            id: '192',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '39',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '40',
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
            id: '192',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '40',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '37',
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
            id: '192',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '42',
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
            id: '192',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '44',
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
      id: '41',
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
      id: '36',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Ipsam inventore est. Adipisci vel et. Nesciunt adipisci aut.\\n\\nRecusandae ut est. Illum cum voluptatem. Assumenda animi tempora.\\n\\nIpsa molestias ipsam. Explicabo hic ut. Vitae eius id.',
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
      id: '40',
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
            id: '18',
            type: 'graduationPlanMapping',
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
      id: '39',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Itaque quas et. Officia dignissimos in. At minus autem.\\n\\nDucimus eos quisquam. Fuga ratione non. Dolor esse asperiores.\\n\\nCumque quaerat dignissimos. Rem dolorem assumenda. Unde aut iste.',
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
            id: '37',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '37',
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
            id: '19',
            type: 'graduationPlanMapping',
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
      id: '40',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Quaerat aut alias. Debitis molestiae dolor. Dignissimos quis exercitationem.\\n\\nLibero doloribus similique. Officia sint odio. Necessitatibus sit sunt.\\n\\nNatus omnis expedita. Modi neque enim. Aut quasi voluptas.',
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
            id: '37',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '42',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Et aperiam itaque. Quam harum autem. Error veniam quo.\\n\\nSit dolorum labore. Quaerat temporibus libero. Sint voluptates exercitationem.\\n\\nQuibusdam nobis et. Doloribus voluptas officia. Qui aut alias.',
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
      id: '44',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Impedit reprehenderit corporis. Eligendi maiores ut. Aut aliquam praesentium.\\n\\nDistinctio aut quisquam. Ut velit nam. Fugit numquam dolore.\\n\\nQuia consequatur dignissimos. Reprehenderit quisquam eius. Dolores optio recusandae.',
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
