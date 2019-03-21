export function getEnrollmentStatusString(enrollment) {
  const { enrollmentStatus, completionStatus } = enrollment.attributes;
  const upcased = enrollmentStatus.charAt(0).toUpperCase() + enrollmentStatus.substr(1);
  switch (enrollmentStatus) {
    case 'enrolled':
      return 'Active';
    case 'closed':
    case 'finalized':
      return `${upcased} - ${completionStatus}`;
    default:
      return enrollmentStatus;
  }
}
