export const ENROLLMENT_STATUS_ENROLLED = 'enrolled';
export const ENROLLMENT_STATUS_CLOSED = 'closed';
export const ENROLLMENT_STATUS_FINALIZED = 'finalized';


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
