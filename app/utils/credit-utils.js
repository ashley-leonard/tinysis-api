/*
 * Returns accepted hours for a credit assignment
 */
export function getHours(creditAssignment) {
  return creditAssignment.attributes.overrideHours
    || creditAssignment.attributes.creditHours
    || 0;
}
