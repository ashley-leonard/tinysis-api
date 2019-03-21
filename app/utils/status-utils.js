import dayjs from 'dayjs';

export const STATUS_ACCEPTABLE = 'satisfactory';
export const STATUS_UNACCEPTABLE = 'unsatisfactory';
export const STATUS_PARTICIPATING = 'participating';

export function getAcademicStatusName(status) {
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

export function activeMonths(term, dayjsToday) {
  const termMonths = term.attributes.months;
  const currentMonth = dayjsToday
    .endOf('month')
    .format('YYYY-MM-DD');

  return termMonths
    .filter(month => month <= currentMonth);
}

export function hashByMonth(statuses) {
  return statuses.reduce((hash, status) => {
    hash[status.attributes.month] = status;
    return hash;
  }, {});
}

export function hashByStatusableIdAndMonth(statuses) {
  return statuses.reduce((hash, status) => {
    const key = status.relationships.statusable.data.id;

    const h = hash[key] || {};

    h[status.attributes.month] = status;
    hash[key] = h;
    return hash;
  }, {});
}

export function isMonthActiveForStatusReporting(month, today) {
  if (!(month && today)) throw new Error('reporting month and current date is required');
  if (!(today instanceof dayjs)) throw new Error('for safety, provide today in dayjs format only');

  const todayString = dayjs(today).endOf('month').format('YYYY-MM-DD');
  return todayString >= month;
}
