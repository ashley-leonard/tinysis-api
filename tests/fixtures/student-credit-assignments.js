// GET /api/credit-assignments?studentIds=99&includeFulfilledAttributes=true&include=credit,contractTerm,contractFacilitator,contract
export default {
  data: [
    {
      id: '34',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Reiciendis ea viscus tabesco somniculosus.',
        contractFacilitatorName: 'Lou Johnson',
        districtFinalizeApproved: true,
        districtFinalizeApprovedBy: 'Gusikowski, Claretha',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
          data: {
            id: '13',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '94',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '6',
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
      id: '35',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Reiciendis ea viscus tabesco somniculosus.',
        contractFacilitatorName: 'Lou Johnson',
        districtFinalizeApproved: null,
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '46',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: {
            id: '13',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '94',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '6',
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
      id: '38',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Damno ulciscor ut contego autem.',
        contractFacilitatorName: 'Walton Jast',
        districtFinalizeApproved: true,
        districtFinalizeApprovedBy: 'Gusikowski, Claretha',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
      id: '39',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Damno ulciscor ut contego autem.',
        contractFacilitatorName: 'Walton Jast',
        districtFinalizeApproved: null,
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
      id: '42',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Accusantium campana possimus pauci votum.',
        contractFacilitatorName: 'Walton Jast',
        districtFinalizeApproved: true,
        districtFinalizeApprovedBy: 'Gusikowski, Claretha',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
      id: '43',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Accusantium campana possimus pauci votum.',
        contractFacilitatorName: 'Walton Jast',
        districtFinalizeApproved: null,
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
  ],
  included: [
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Reiciendis ea viscus tabesco somniculosus.',
        status: 'closed',
        learningObjectives: 'Voluptate ullam audeo viriliter tactus.',
        competencies: 'Allatus commodi cras tersus vito.',
        evaluationMethods: 'Tergo tibi denego accusantium atrox.',
        instructionalMaterials: 'Clamo ultra consequatur defleo video.',
        location: 'Attollo voco tener vultuosus conduco.',
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
            id: '94',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '13',
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

          ],
        },
        creditAssignments: {
          data: [
            {
              id: '22',
              type: 'creditAssignment',
            },
            {
              id: '34',
              type: 'creditAssignment',
            },
            {
              id: '35',
              type: 'creditAssignment',
            },
            {
              id: '36',
              type: 'creditAssignment',
            },
            {
              id: '37',
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
      id: '94',
      type: 'user',
      attributes: {
        firstName: 'Lou',
        lastName: 'Johnson',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'joy@schimmelmacejkovic.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '98',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '13',
      type: 'term',
      attributes: {
        name: 'Virtual bandwidth-monitored architecture',
        schoolYear: 2018,
        creditDate: '2019-01-31',
        months: [
          '2018-09-01',
          '2018-10-01',
          '2018-11-01',
          '2018-12-01',
          '2019-01-01',
        ],
        status: 'active',
      },
      meta: null,
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
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Damno ulciscor ut contego autem.',
        status: 'closed',
        learningObjectives: 'Thesis adaugeo ullus labore consequatur.',
        competencies: 'Viduata cernuus amita centum vallum.',
        evaluationMethods: 'Suppellex aeneus totidem doloribus ver.',
        instructionalMaterials: 'Ratione benevolentia argumentum consectetur patruus.',
        location: 'Sordeo absum congregatio balbus vel.',
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
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '14',
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
              id: '24',
              type: 'creditAssignment',
            },
            {
              id: '38',
              type: 'creditAssignment',
            },
            {
              id: '39',
              type: 'creditAssignment',
            },
            {
              id: '40',
              type: 'creditAssignment',
            },
            {
              id: '41',
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
      id: '95',
      type: 'user',
      attributes: {
        firstName: 'Walton',
        lastName: 'Jast',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'destiny@kuhickunde.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '99',
              type: 'user',
            },
            {
              id: '100',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '14',
      type: 'term',
      attributes: {
        name: 'Digitized analyzing leverage',
        schoolYear: 2018,
        creditDate: '2019-06-15',
        months: [
          '2019-02-01',
          '2019-03-01',
          '2019-04-01',
          '2019-05-01',
          '2019-06-01',
        ],
        status: 'active',
      },
      meta: null,
    },
    {
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Accusantium campana possimus pauci votum.',
        status: 'closed',
        learningObjectives: 'Et adficio quia atrox thorax.',
        competencies: 'Strenuus vaco culpa dapifer turpis.',
        evaluationMethods: 'Conitor ademptio decimus verus tepidus.',
        instructionalMaterials: 'Audentia illo vociferor vita cimentarius.',
        location: 'Vesper explicabo dicta confido arca.',
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
              id: '21',
              type: 'enrollment',
            },
            {
              id: '22',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '95',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '14',
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
              id: '26',
              type: 'creditAssignment',
            },
            {
              id: '42',
              type: 'creditAssignment',
            },
            {
              id: '43',
              type: 'creditAssignment',
            },
            {
              id: '44',
              type: 'creditAssignment',
            },
            {
              id: '45',
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
  ],
  meta: {
    count: 6,
  },
};
