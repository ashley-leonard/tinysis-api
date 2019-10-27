// GET /api/contracts
export default {
  data: [
    {
      id: '5',
      type: 'contract',
      attributes: {
        name: 'Quae talio baiulus agnosco voluptas.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '3',
            type: 'category',
          },
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
      },
    },
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Suppono ater concido decerno validus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
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
      },
    },
    {
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Coaegresco ulterius creator eligendi apparatus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
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
      },
    },
    {
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Aduro careo degero exercitationem summisse.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
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
        enrollments: {
          data: [

          ],
        },
      },
    },
    {
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Demergo somnus denuncio tamen solitudo.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '3',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '7',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '7',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '5',
              type: 'enrollment',
            },
            {
              id: '6',
              type: 'enrollment',
            },
            {
              id: '7',
              type: 'enrollment',
            },
          ],
        },
      },
    },
    {
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Tenus iusto coadunatio vicinus deorsum.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '4',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '8',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '7',
            type: 'term',
          },
        },
        enrollments: {
          data: [
            {
              id: '8',
              type: 'enrollment',
            },
            {
              id: '9',
              type: 'enrollment',
            },
            {
              id: '10',
              type: 'enrollment',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '3',
      type: 'category',
      attributes: {
        name: 'Category 1',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '5',
              type: 'contract',
            },
            {
              id: '9',
              type: 'contract',
            },
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
      id: '4',
      type: 'category',
      attributes: {
        name: 'Category 2',
        sequence: 0,
        public: false,
        reporting: 'none',
        activeContractsCount: 1,
        homeroom: false,
      },
      relationships: {
        contracts: {
          data: [
            {
              id: '6',
              type: 'contract',
            },
            {
              id: '7',
              type: 'contract',
            },
            {
              id: '8',
              type: 'contract',
            },
            {
              id: '10',
              type: 'contract',
            },
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
      type: 'term',
      attributes: {
        name: 'Seamless contextually-based encoding',
        schoolYear: 2019,
        creditDate: '2020-01-31',
        months: [
          '2019-09-01',
          '2019-10-01',
          '2019-11-01',
          '2019-12-01',
          '2020-01-01',
        ],
        status: 'active',
      },
      meta: null,
    },
  ],
  meta: {
    count: 6,
  },
};
