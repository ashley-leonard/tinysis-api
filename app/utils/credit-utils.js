/*
 * Returns accepted hours for a credit assignment
 */
export function getHours(creditAssignment) {
  return creditAssignment.attributes.overrideHours
    || creditAssignment.attributes.creditHours
    || 0;
}

/*
 * Returns suitable course name
 */
export function getCourseName(creditAssignment, credit) {
  return (credit && credit.attributes.courseName)
    || creditAssignment.attributes.creditCourseName
    || creditAssignment.attributes.contractName;
}
