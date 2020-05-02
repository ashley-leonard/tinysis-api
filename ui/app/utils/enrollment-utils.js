export const ENROLLMENT_STATUS_ENROLLED = 'enrolled';
export const ENROLLMENT_STATUS_CLOSED = 'closed';
export const ENROLLMENT_STATUS_FINALIZED = 'finalized';

export const ENROLLMENT_COMPLETION_CANCELED = 'canceled';
export const ENROLLMENT_COMPLETION_FULFILLED = 'fulfilled';

export function getEnrollmentStatusString(enrollment) {
  const { enrollmentStatus, completionStatus } = enrollment.attributes;
  const upcased = enrollmentStatus.charAt(0).toUpperCase() + enrollmentStatus.substr(1);
  switch (enrollmentStatus) {
    case ENROLLMENT_STATUS_ENROLLED:
      return 'Active';
    case ENROLLMENT_STATUS_CLOSED:
    case ENROLLMENT_STATUS_FINALIZED:
      return `${upcased} - ${completionStatus}`;
    default:
      return enrollmentStatus;
  }
}

export function isClosed(enrollment) {
  return enrollment.attributes.enrollmentStatus === ENROLLMENT_STATUS_CLOSED;
}

export function isEnrolled(enrollment) {
  return enrollment.attributes.enrollmentStatus === ENROLLMENT_STATUS_ENROLLED;
}

export function isCanceled(enrollment) {
  return isClosed(enrollment) && enrollment.attributes.completionStatus === ENROLLMENT_COMPLETION_CANCELED;
}

export function isFulfilled(enrollment) {
  return isClosed(enrollment) && enrollment.attributes.completionStatus === ENROLLMENT_COMPLETION_FULFILLED;
}
