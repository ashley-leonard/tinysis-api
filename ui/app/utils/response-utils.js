/*
 * Given a response from our API server, creates
 * a reasonably formatted message.
 *
 * @param Object response An object with an errors member,
 * which is an object keyed by attribute name with an array
 * of errors for each attribute listed
 *
 * @returns A string formatted as error message
 */
export function summarizeValidationError(response) {
  const { errors } = response;
  if (!errors) {
    return response.exception || response.message;
  }

  const fieldMessages = Object.keys(errors)
    .map((field) => {
      const fieldErrors = errors[field];
      return `${field} ${fieldErrors.join(', ')}`;
    });
  return `Please fix the following errors noted by the server: ${fieldMessages.join('; ')}`;
}
