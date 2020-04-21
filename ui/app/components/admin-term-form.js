import { computed } from '@ember/object';
import { equal, not } from '@ember/object/computed';
import dayjs from 'dayjs';
import Validator from '../utils/validator';
import TForm from './t-form';

export default TForm.extend({
  schoolYears: computed(() => []),
  isActive: equal('pojo.status', 'active'),
  isInactive: not('isActive'),

  sortedSchoolYears: computed('schoolYears', function () {
    return this.schoolYears.sort((a, b) => b - a);
  }),

  reportingMonthOptions: computed('pojo.schoolYear', 'reportingBaseMonth', function () {
    const {
      reportingBaseMonth,
      pojo,
    } = this;

    const { schoolYear } = pojo;
    const baseMonth = dayjs(new Date(schoolYear, reportingBaseMonth - 1, 1));
    const months = [];

    for (let i = 0; i < 12; i += 1) {
      months.push(baseMonth.add(i, 'month').format('YYYY-MM-DD'));
    }
    return months;
  }),

  validator: computed(() => new Validator({
    name: [{
      type: 'required',
    }, {
      type: 'format',
      regex: /\w.{5,100}/,
    }],
    creditDate: { type: 'required' },
    schoolYear: { type: 'required' },
    months: {
      type: 'required',
      message: 'Please select at least one reporting month',
    },
  })),

  actions: {
    toggleStatus() {
      const { pojo } = this;
      this.set('pojo', {
        ...pojo,
        status: pojo.status === 'active' ? 'inactive' : 'active',
      });
      this.validate();
    },

    toggleMonth(reportingMonth) {
      const months = this.pojo.months || [];
      const existingMonth = (months || []).find(month => month === reportingMonth);
      if (existingMonth) {
        this.set('pojo', {
          ...this.pojo,
          months: months.filter(month => month !== reportingMonth),
        });
      } else {
        this.set('pojo', {
          ...this.pojo,
          months: months.concat([reportingMonth]).sort(),
        });
      }
      this.validate();
    },

    // keep the months stable with the newly selected
    // year
    didChangeSchoolYear(value) {
      const { pojo } = this;
      const yearDiff = value - pojo.schoolYear;
      const months = pojo.months.map(month => dayjs(month)
        .add(yearDiff, 'years')
        .format('YYYY-MM-DD'));
      this.set('pojo', {
        ...pojo,
        schoolYear: value,
        months,
      });
    },
  },
});
