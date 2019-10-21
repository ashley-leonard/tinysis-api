// GET /api/credit-assignments?studentIds=246&includeFulfilledAttributes=true&include=credit,contractTerm,contractFacilitator,contract
export default {
  data: [
    {
      id: '34',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crepusculum sodalitas similique cohibeo depulso.',
        contractFacilitatorName: 'Bong Mayer',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
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
            id: '60',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '241',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '10',
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
      id: '35',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crepusculum sodalitas similique cohibeo depulso.',
        contractFacilitatorName: 'Bong Mayer',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
        districtFinalizeApprovedOn: '2019-11-15',
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
            id: '60',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '241',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '10',
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
      id: '36',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Crepusculum sodalitas similique cohibeo depulso.',
        contractFacilitatorName: 'Bong Mayer',
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
            id: '60',
            type: 'term',
          },
        },
        contractFacilitator: {
          data: {
            id: '241',
            type: 'user',
          },
        },
        contract: {
          data: {
            id: '10',
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
      id: '40',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Compono amiculum cupiditate urbs defessus.',
        contractFacilitatorName: 'Hector Ritchie',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
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
            id: '11',
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
      id: '41',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Compono amiculum cupiditate urbs defessus.',
        contractFacilitatorName: 'Hector Ritchie',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
        districtFinalizeApprovedOn: '2019-11-15',
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
            id: '11',
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
      id: '42',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Compono amiculum cupiditate urbs defessus.',
        contractFacilitatorName: 'Hector Ritchie',
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
            id: '11',
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
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.25,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Conculco angustus tempus toties dicta.',
        contractFacilitatorName: 'Hector Ritchie',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
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
      id: '47',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Conculco angustus tempus toties dicta.',
        contractFacilitatorName: 'Hector Ritchie',
        districtFinalizeApprovedBy: 'Mohr, Scotty',
        districtFinalizeApprovedOn: '2019-11-15',
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
      id: '48',
      type: 'creditAssignment',
      attributes: {
        creditHours: 0.5,
        enrollmentFinalizedOn: '2019-11-15',
        contractName: 'Conculco angustus tempus toties dicta.',
        contractFacilitatorName: 'Hector Ritchie',
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
  ],
  included: [
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Crepusculum sodalitas similique cohibeo depulso.',
        status: 'closed',
        learningObjectives: 'Tertius nisi quaerat voluptates balbus.',
        competencies: 'Earum et animi adhaero explicabo.',
        evaluationMethods: 'Timor pauper acervus ara depromo.',
        instructionalMaterials: 'Animus comedo tricesimus amiculum umquam.',
        location: 'Et termes avarus denuncio sui.',
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
            id: '241',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '60',
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
            {
              id: '38',
              type: 'creditAssignment',
            },
            {
              id: '39',
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
      id: '241',
      type: 'user',
      attributes: {
        firstName: 'Bong',
        lastName: 'Mayer',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'kenakulas@pourotamm.com',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '245',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '60',
      type: 'term',
      attributes: {
        name: 'Adaptive 6th generation function',
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
      id: '11',
      type: 'contract',
      attributes: {
        name: 'Compono amiculum cupiditate urbs defessus.',
        status: 'closed',
        learningObjectives: 'Tepesco quam vesica iure vestrum.',
        competencies: 'Corrigo sol baiulus urbs amoveo.',
        evaluationMethods: 'Adeo tristis auris venustas ullus.',
        instructionalMaterials: 'Paulatim attonbitus cupiditate acies avaritia.',
        location: 'Urbanus vigilo sufficio contra earum.',
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
              id: '23',
              type: 'enrollment',
            },
            {
              id: '24',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
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
              id: '24',
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
    {
      id: '242',
      type: 'user',
      attributes: {
        firstName: 'Hector',
        lastName: 'Ritchie',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'ethelkris@dicki.co',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '246',
              type: 'user',
            },
            {
              id: '247',
              type: 'user',
            },
          ],
        },
      },
    },
    {
      id: '61',
      type: 'term',
      attributes: {
        name: 'Balanced content-based open architecture',
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
      id: '12',
      type: 'contract',
      attributes: {
        name: 'Conculco angustus tempus toties dicta.',
        status: 'closed',
        learningObjectives: 'Tepesco curvus architecto virgo coruscus.',
        competencies: 'Creptio adiuvo contigo eos vetus.',
        evaluationMethods: 'Excepturi solus debilito coma tumultus.',
        instructionalMaterials: 'Vae tondeo circumvenio cenaculum toties.',
        location: 'Claustrum crustulum undique aut eaque.',
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
              id: '25',
              type: 'enrollment',
            },
            {
              id: '26',
              type: 'enrollment',
            },
          ],
        },
        facilitator: {
          data: {
            id: '242',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '61',
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
              id: '26',
              type: 'creditAssignment',
            },
            {
              id: '46',
              type: 'creditAssignment',
            },
            {
              id: '47',
              type: 'creditAssignment',
            },
            {
              id: '48',
              type: 'creditAssignment',
            },
            {
              id: '49',
              type: 'creditAssignment',
            },
            {
              id: '50',
              type: 'creditAssignment',
            },
            {
              id: '51',
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
