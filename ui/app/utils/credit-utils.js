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

/*
 * Returns a safe new credit assignment model for a creditable
 */
export function getNewCreditAssignmentForCreditable(creditable) {
  return {
    attributes: {
      creditHours: 0.5,
    },
    relationships: {
      [creditable.type]: {
        data: {
          id: creditable.id,
          type: creditable.type,
        },
      },
    },
  };
}
