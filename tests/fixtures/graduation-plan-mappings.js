// GET /api/graduation-plan-mappings/99
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
            id: '99',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '15',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '43',
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
            id: '99',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '18',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '42',
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
            id: '99',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '19',
            type: 'graduationPlanRequirement',
          },
        },
        creditAssignment: {
          data: {
            id: '39',
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
            id: '99',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '21',
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
            id: '99',
            type: 'user',
          },
        },
        graduationPlanRequirement: {
          data: {
            id: '23',
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
      id: '43',
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
            id: '14',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '8',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '99',
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
      id: '15',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Math',
        notes: 'Enim non odit. Sint sed ut. In enim aut.\\n\\nSunt pariatur fugit. In autem est. Aut optio et.\\n\\nImpedit saepe rem. Aut illum exercitationem. Doloribus voluptate ipsam.',
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
      id: '42',
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
        contractTerm: {
          data: {
            id: '14',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '95',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '8',
            type: 'contract',
          },
        },
        user: {
          data: {
            id: '99',
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
      id: '18',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language1',
        notes: 'Veritatis perferendis ut. Architecto excepturi rerum. Quia dolorem eos.\\n\\nOdio quaerat itaque. Molestiae enim ex. Maxime qui rerum.\\n\\nEt officia eos. Laudantium exercitationem odit. Facere aut ad.',
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
            id: '16',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '39',
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
        contractTerm: {
          data: {
            id: '14',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '95',
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
            id: '99',
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
      id: '19',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Language2',
        notes: 'Quo ullam sequi. Eaque quis dolores. Tenetur natus officia.\\n\\nIncidunt tempora quo. Minima est sed. Ratione voluptatum voluptatibus.\\n\\nHic blanditiis laudantium. Ut voluptatem nihil. Omnis voluptas quis.',
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
            id: '16',
            type: 'GraduationPlanRequirement',
          },
        },
      },
    },
    {
      id: '21',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'General1',
        notes: 'Officia ut mollitia. Commodi rem tempora. Enim amet praesentium.\\n\\nReiciendis iste odit. Et enim similique. Laboriosam ut totam.\\n\\nDeleniti consequatur nihil. Saepe modi magni. Architecto eaque quam.',
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
      id: '23',
      type: 'graduationPlanRequirement',
      attributes: {
        name: 'Service1',
        notes: 'Qui quae sint. Aspernatur sapiente saepe. Nulla laborum a.\\n\\nDucimus voluptatem vitae. Non vel quaerat. In similique ab.\\n\\nRecusandae quasi dolorum. Aliquam quisquam possimus. Ipsa ut sunt.',
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
