// GET /api/contracts
export default {
  data: [
    {
      id: '6',
      type: 'contract',
      attributes: {
        name: 'Delinquo decerno doloremque tactus modi.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '6',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '56',
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
      id: '7',
      type: 'contract',
      attributes: {
        name: 'Subito adhaero synagoga ascisco apparatus.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '153',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '57',
            type: 'term',
          },
        },
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
      },
    },
    {
      id: '8',
      type: 'contract',
      attributes: {
        name: 'Cohibeo antepono tristis nobis concedo.',
        status: 'closed',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '153',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '57',
            type: 'term',
          },
        },
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
      },
    },
    {
      id: '9',
      type: 'contract',
      attributes: {
        name: 'Averto spiculum spoliatio aestus alter.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '6',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '152',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '58',
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
      id: '10',
      type: 'contract',
      attributes: {
        name: 'Certe textor vir correptius aggredior.',
        status: 'approved',
      },
      relationships: {
        category: {
          data: {
            id: '7',
            type: 'category',
          },
        },
        facilitator: {
          data: {
            id: '153',
            type: 'User',
          },
        },
        term: {
          data: {
            id: '58',
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
  ],
  included: [
    {
      id: '6',
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
              id: '6',
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
      id: '152',
      type: 'user',
      attributes: {
        firstName: 'Frederick',
        lastName: 'Lehner',
        nickname: null,
        dateActive: '2012-09-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'jackie@nicolas.info',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '156',
              type: 'student',
            },
          ],
        },
      },
    },
    {
      id: '7',
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
      id: '153',
      type: 'user',
      attributes: {
        firstName: 'Tamie',
        lastName: 'Trantow',
        nickname: null,
        dateActive: '2013-02-01',
        dateInactive: null,
        districtId: null,
        districtGrade: 12,
        email: 'aron@heel.org',
        status: 'active',
        role: 'staff',
      },
      relationships: {
        coordinatees: {
          data: [
            {
              id: '157',
              type: 'student',
            },
            {
              id: '158',
              type: 'student',
            },
          ],
        },
      },
    },
  ],
  meta: {
    count: 5,
  },
};
