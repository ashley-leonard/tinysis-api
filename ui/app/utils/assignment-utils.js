import dayjs from 'dayjs';

export function isAssignmentDue(assignment, date) {
  const compareString = dayjs(date).format('YYYY-MM-DD');
  return compareString > assignment.attributes.dueDate;
}

export const TURNIN_STATUSES = 'missing incomplete complete late exceptional'.split(' ');

export const [
  TURNIN_MISSING,
  TURNIN_INCOMPLETE,
  TURNIN_COMPLETE,
  TURNIN_LATE,
  TURNIN_EXCEPTIONAL,
] = TURNIN_STATUSES;
