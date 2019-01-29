import moment from 'moment';

export function wasActive(student, month) {
  const m = moment(month);
  const endOfMonth = m.endOf('month').format('YYYY-MM-DD');

  if (endOfMonth < student.attributes.dateActive) {
    return false;
  }

  if (student.attributes.status === 'active') {
    return true;
  }

  return month <= student.attributes.dateInactive;
}
