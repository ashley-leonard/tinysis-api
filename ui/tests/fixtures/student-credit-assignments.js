// GET /api/credit-assignments?studentIds=12&includeFulfilledAttributes=true&include=credit,contractTerm,contractFacilitator,contract
export default {
  data: [
    {
      id: '13',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Quae talio baiulus agnosco voluptas.',
        contractFacilitatorName: 'Dominic Collier',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: {
            id: '5',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '5',
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
      id: '14',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Quae talio baiulus agnosco voluptas.',
        contractFacilitatorName: 'Dominic Collier',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: {
            id: '5',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '5',
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
      id: '15',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Quae talio baiulus agnosco voluptas.',
        contractFacilitatorName: 'Dominic Collier',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
        },
        contractTerm: {
          data: {
            id: '5',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '7',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '5',
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
      id: '19',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Suppono ater concido decerno validus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '1',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
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
            id: '6',
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
      id: '20',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Suppono ater concido decerno validus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
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
            id: '6',
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
      id: '21',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Suppono ater concido decerno validus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
      },
      relationships: {
        credit: {
          data: {
            id: '2',
            type: 'credit',
          },
        },
        graduationPlanMapping: {
          data: null,
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
            id: '6',
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
      id: '25',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Coaegresco ulterius creator eligendi apparatus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
      id: '26',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Coaegresco ulterius creator eligendi apparatus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: 'Kohler, Cleotilde',
        districtFinalizeApprovedOn: '2019-11-15',
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
      id: '27',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Coaegresco ulterius creator eligendi apparatus.',
        contractFacilitatorName: 'Weston Rempel',
        districtFinalizeApprovedBy: null,
        districtFinalizeApprovedOn: null,
        districtTransmittedOn: null,
        overrideHours: null,
        overrideBy: null,
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
  ],
  included: [
    {
      id: '5',
      type: 'contract',
      attributes: {
        name: 'Quae talio baiulus agnosco voluptas.',
        status: 'closed',
        learningObjectives: 'Tepesco nesciunt aliqua aureus casus.',
        competencies: 'Vultuosus caveo varietas vix capio.',
        evaluationMethods: 'Defungo volup vesper eius terreo.',
        instructionalMaterials: 'Ulciscor animus possimus callide approbo.',
        location: 'Accusamus canonicus sopor armarium animadverto.',
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
              id: '11',
              type: 'enrollment',
            },
            {
              id: '12',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '7',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '5',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '3',
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
            {
              id: '13',
              type: 'creditAssignment',
            },
            {
              id: '14',
              type: 'creditAssignment',
            },
            {
              id: '15',
              type: 'creditAssignment',
            },
            {
              id: '16',
              type: 'creditAssignment',
            },
            {
              id: '17',
              type: 'creditAssignment',
            },
            {
              id: '18',
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
      id: '7',
      type: 'user',
      attributes: {
        firstName: 'Dominic',
        lastName: 'Collier',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'janelle@rathskiles.net',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '11',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '5',
      type: 'term',
      attributes: {
        name: 'Fundamental actuating local area network',
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
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Suppono ater concido decerno validus.',
        status: 'closed',
        learningObjectives: 'Cribro adamo consuasor deprimo explicabo.',
        competencies: 'Usus necessitatibus vulpes terebro vulgivagus.',
        evaluationMethods: 'Tero unus tabernus stips numquam.',
        instructionalMaterials: 'Tergiversatio amo ante soluta et.',
        location: 'Sumptus ancilla vetus vomito terebro.',
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
              id: '13',
              type: 'enrollment',
            },
            {
              id: '14',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '8',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '6',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '4',
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
            {
              id: '19',
              type: 'creditAssignment',
            },
            {
              id: '20',
              type: 'creditAssignment',
            },
            {
              id: '21',
              type: 'creditAssignment',
            },
            {
              id: '22',
              type: 'creditAssignment',
            },
            {
              id: '23',
              type: 'creditAssignment',
            },
            {
              id: '24',
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
      id: '8',
      type: 'user',
      attributes: {
        firstName: 'Weston',
        lastName: 'Rempel',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'judsonparker@upton.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '12',
              type: 'user',
            },
            {
              id: '13',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '6',
      type: 'term',
      attributes: {
        name: 'Re-engineered intermediate extranet',
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
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Coaegresco ulterius creator eligendi apparatus.',
        status: 'closed',
        learningObjectives: 'Adulescens altus rem laudantium tondeo.',
        competencies: 'Molestias rerum esse pax comparo.',
        evaluationMethods: 'Fugit contra tunc autem defaeco.',
        instructionalMaterials: 'Tempus cilicium et tenax ubi.',
        location: 'Valetudo usitas arx deorsum quos.',
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
            id: '8',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '6',
            type: 'term',
          },
        },
        category: {
          data: {
            id: '4',
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
              id: '5',
              type: 'creditAssignment',
            },
            {
              id: '25',
              type: 'creditAssignment',
            },
            {
              id: '26',
              type: 'creditAssignment',
            },
            {
              id: '27',
              type: 'creditAssignment',
            },
            {
              id: '28',
              type: 'creditAssignment',
            },
            {
              id: '29',
              type: 'creditAssignment',
            },
            {
              id: '30',
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
    count: 9,
  },
};
