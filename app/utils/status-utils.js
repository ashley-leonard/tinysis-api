export const STATUS_ACCEPTABLE = 0;
export const STATUS_UNACCEPTABLE = 1;
export const STATUS_PARTICIPATING = 2;

export function academicStatusName(status) {
  const { academicStatus } = status.attributes;

  switch (academicStatus) {
    case STATUS_ACCEPTABLE:
      return 'Satisfactory';
    case STATUS_UNACCEPTABLE:
      return 'Unsatisfactory';
    case STATUS_PARTICIPATING:
      return 'Participating';
    default:
      throw new Error('Unknown academic status type');
  }
}

export function attendanceStatusName(status) {
  const { attendanceStatus } = status.attributes;

  switch (attendanceStatus) {
    case STATUS_ACCEPTABLE:
      return 'Satisfactory';
    case STATUS_UNACCEPTABLE:
      return 'Unsatisfactory';
    default:
      throw new Error('Unknown attendance status type');
  }
}

export function fteRequirementsStatusName(status) {
  const { metFteRequirements } = status.attributes;

  if (metFteRequirements) {
    return 'Acceptable';
  }

  return 'Unacceptable';
}

export function isUnacceptable(status) {
  const {
    academicStatus,
    attendanceStatus,
    heldPeriodicCheckins,
    metFteRequirements,
  } = status.attributes;

  if (academicStatus === STATUS_UNACCEPTABLE) return true;

  if (attendanceStatus === STATUS_UNACCEPTABLE) return true;

  if (status.relationships.statusable.data.type === 'user') {
    return !heldPeriodicCheckins;
  }

  return metFteRequirements;
}

export function activeMonths(term, momentToday) {
  const termMonths = term.attributes.months;
  const currentMonth = momentToday
    .endOf('month')
    .format('YYYY-MM-DD');

  return termMonths
    .filter(month => month <= currentMonth);
}
